// =============================================================================
// THE ASCEND — i18n Types and Engine
// =============================================================================
//
// Architecture:
//  - Translation dictionaries live in es.ts and fr.ts
//  - HTML elements use data-i18n="dot.notation.key" for text content
//  - HTML elements use data-i18n-attr="attrName:dot.notation.key" for attributes
//  - The applyTranslations() function is called by MarketSelector on change
//  - BaseLayout.astro calls initI18n() on every page load
//
// Adding a new language:
//  1. Create src/i18n/xx.ts following the same structure as es.ts
//  2. Add the market to src/data/market.ts
//  3. Import and add the translation in this file's getTranslations()
//
// =============================================================================

export interface I18nDict {
  [key: string]: string | I18nDict;
}

// Map: market code → language code
export const MARKET_LANG: Record<string, string> = {
  FR: 'fr',
  ES: 'es',
  PE: 'es', // Peru uses Spanish
};

/**
 * Get a value from a nested dictionary using dot notation.
 * Returns undefined if path doesn't exist.
 * Example: getByPath(dict, "nav.services") → "Servicios"
 */
export function getByPath(obj: I18nDict, path: string): string | undefined {
  const parts = path.split('.');
  let current: I18nDict | string = obj;
  for (const part of parts) {
    if (typeof current !== 'object' || current === null) return undefined;
    current = (current as I18nDict)[part];
  }
  return typeof current === 'string' ? current : undefined;
}
