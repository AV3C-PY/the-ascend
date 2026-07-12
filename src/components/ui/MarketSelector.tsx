/**
 * MarketSelector.tsx
 * Market/language selector displayed in the navbar.
 *
 * - Shows current market flag + code (e.g. 🇪🇸 ES ▾)
 * - Opens a dropdown with all available markets
 * - Persists selection to localStorage
 * - Dispatches 'marketchange' event so other components can react
 * - Updates pricing on the page if present
 *
 * TODO: Add more markets in src/data/market.ts
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { MARKET_LIST, DEFAULT_MARKET, MARKET_PRICING } from '@data/market';
import type { MarketCode, Market } from '@data/market';

const STORAGE_KEY = 'ascend_market';

function getInitialMarket(): MarketCode {
  if (typeof window === 'undefined') return DEFAULT_MARKET;
  const stored = localStorage.getItem(STORAGE_KEY) as MarketCode | null;
  if (stored && MARKET_LIST.some((m) => m.code === stored)) return stored;
  return DEFAULT_MARKET;
}

function applyMarketToPricing(marketCode: MarketCode) {
  const pricing = MARKET_PRICING[marketCode];
  if (!pricing) return;

  // Update currency symbol on all [data-market-currency] elements
  document.querySelectorAll<HTMLElement>('[data-market-currency]').forEach((el) => {
    const market = MARKET_LIST.find((m) => m.code === marketCode);
    if (market) el.textContent = market.currencySymbol;
  });

  // Update price amounts on [data-market-price="planId"] elements
  pricing.plans.forEach((plan) => {
    document
      .querySelectorAll<HTMLElement>(`[data-market-price="${plan.id}"]`)
      .forEach((el) => {
        el.textContent = plan.price.toLocaleString();
      });
  });

  // Update pricing note
  document.querySelectorAll<HTMLElement>('[data-market-note]').forEach((el) => {
    el.textContent = pricing.note ?? '';
  });
}

export default function MarketSelector() {
  const [market, setMarket] = useState<MarketCode>(DEFAULT_MARKET);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hydrate from localStorage on client
  useEffect(() => {
    const initial = getInitialMarket();
    setMarket(initial);
    setMounted(true);
    applyMarketToPricing(initial);
  }, []);

  const selectMarket = useCallback((code: MarketCode) => {
    setMarket(code);
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, code);
    applyMarketToPricing(code);

    // Dispatch event so any other components can react
    window.dispatchEvent(new CustomEvent('marketchange', { detail: { market: code } }));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const currentMarket = MARKET_LIST.find((m) => m.code === market)!;

  // Before hydration: render a stable placeholder that matches SSR
  if (!mounted) {
    return (
      <div className="market-selector market-selector--loading" aria-hidden="true">
        <span className="market-selector__flag">🌍</span>
        <span className="market-selector__code">--</span>
        <svg className="market-selector__chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="market-selector" ref={containerRef}>
      <button
        className={`market-selector__trigger${open ? ' market-selector__trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Mercado actual: ${currentMarket.label}. Cambiar mercado`}
        type="button"
      >
        <span className="market-selector__flag" aria-hidden="true">
          {currentMarket.flag}
        </span>
        <span className="market-selector__code">{currentMarket.label}</span>
        <svg
          className={`market-selector__chevron${open ? ' market-selector__chevron--open' : ''}`}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div
          className="market-selector__dropdown"
          role="listbox"
          aria-label="Seleccionar mercado"
        >
          {MARKET_LIST.map((m: Market) => (
            <button
              key={m.code}
              className={`market-selector__option${m.code === market ? ' market-selector__option--active' : ''}`}
              onClick={() => selectMarket(m.code)}
              role="option"
              aria-selected={m.code === market}
              type="button"
            >
              <span className="market-selector__option-flag" aria-hidden="true">
                {m.flag}
              </span>
              <span className="market-selector__option-label">{m.label}</span>
              {m.code === market && (
                <svg
                  className="market-selector__option-check"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
