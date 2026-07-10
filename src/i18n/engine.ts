// =============================================================================
// THE ASCEND — i18n Client Engine
// =============================================================================
//
// This file is imported by BaseLayout.astro and injected as an inline script.
// It runs on every page load and on every market change.
//
// How it works:
//  1. MarketSelector saves market code to localStorage ('ascend_market')
//  2. MarketSelector emits a custom 'marketchange' event with detail.market
//  3. This engine listens for 'marketchange' and applies translations
//  4. On page load, it reads localStorage and applies initial translations
//  5. HTML elements with [data-i18n="key"] get their text updated
//  6. HTML elements with [data-i18n-attr="attr:key"] get their attr updated
//
// =============================================================================

import { es } from './es';
import { fr } from './fr';
import type { I18nDict } from './index';

export type Lang = 'es' | 'fr';

/** Map market code → language */
export const MARKET_LANG: Record<string, Lang> = {
  FR: 'fr',
  ES: 'es',
  PE: 'es',
};

/** Get current language from localStorage */
export function getCurrentLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const market = localStorage.getItem('ascend_market') ?? 'ES';
  return MARKET_LANG[market] ?? 'es';
}

/** Get translation dictionary for a language */
export function getDict(lang: Lang): typeof es | typeof fr {
  return lang === 'fr' ? fr : es;
}

/** Get value at dot-notation path from a nested object */
export function getByPath(obj: I18nDict, path: string): string | undefined {
  const parts = path.split('.');
  let current: I18nDict | string = obj;
  for (const part of parts) {
    if (typeof current !== 'object' || current === null) return undefined;
    current = (current as Record<string, unknown>)[part] as I18nDict | string;
  }
  return typeof current === 'string' ? current : undefined;
}

/**
 * Apply translations to all elements with data-i18n attributes.
 * Call this on page load and on market change.
 */
export function applyTranslations(lang: Lang): void {
  const dict = getDict(lang) as unknown as I18nDict;

  // Text content: <span data-i18n="hero.badge">...</span>
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n!;
    const value = getByPath(dict, key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // HTML content: <div data-i18n-html="hero.badge">...</div>
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml!;
    const value = getByPath(dict, key);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Attribute: <input data-i18n-attr="placeholder:contact.form.namePlaceholder">
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr!;
    // Support multiple attrs: "placeholder:key,aria-label:key2"
    spec.split(',').forEach((pair) => {
      const [attr, key] = pair.trim().split(':');
      if (!attr || !key) return;
      const value = getByPath(dict, key);
      if (value !== undefined) {
        el.setAttribute(attr, value);
      }
    });
  });

  // Update the html lang attribute
  document.documentElement.lang = lang;
}

/**
 * Get the current translation dictionary based on market.
 * Useful for server-side or SSR contexts.
 */
export function t(lang: Lang, key: string): string {
  const dict = getDict(lang) as unknown as I18nDict;
  return getByPath(dict, key) ?? key;
}
