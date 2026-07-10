# The Ascend — Sitio Web Oficial

> Transformación digital para pequeñas empresas en Francia, España y Perú.

El sitio está construido con **Astro 5**, desplegado en **Cloudflare Pages**, e integrado con **Resend** para el formulario de contacto.

---

## Tabla de contenidos

- [Inicio rápido](#inicio-rápido)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Dónde editar contenido](#dónde-editar-contenido)
- [Sistema de mercados](#sistema-de-mercados)
- [Variables de entorno](#variables-de-entorno)
- [Comandos disponibles](#comandos-disponibles)
- [Despliegue en Cloudflare Pages](#despliegue-en-cloudflare-pages)
- [Arquitectura técnica](#arquitectura-técnica)

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:4321
```

---

## Estructura del proyecto

```
ASCEND/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro         # Navbar con market selector
│   │   │   └── Footer.astro         # Footer con nav y redes sociales
│   │   ├── sections/
│   │   │   ├── Hero.astro           # Sección principal del home
│   │   │   ├── ServicesOverview.astro
│   │   │   ├── ProcessTeaser.astro
│   │   │   ├── PortfolioTeaser.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FaqTeaser.astro
│   │   │   └── CTABanner.astro
│   │   └── ui/
│   │       └── MarketSelector.tsx   # Selector de mercado (React)
│   │
│   ├── data/                        # ← Edita aquí todo el contenido
│   │   ├── market.ts                # Mercados y PRECIOS por país
│   │   ├── site.ts                  # Info empresa, email, WhatsApp, redes
│   │   ├── services.ts              # Todos los servicios
│   │   ├── pricing.ts               # Planes (legacy, ver market.ts)
│   │   ├── testimonials.ts          # Testimonios de clientes
│   │   ├── faq.ts                   # Preguntas frecuentes
│   │   ├── portfolio.ts             # Proyectos del portfolio
│   │   └── process.ts               # Pasos del proceso
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML base, SEO, fuentes, analytics
│   │
│   ├── pages/
│   │   ├── index.astro              # Página principal
│   │   ├── servicios.astro          # Todos los servicios
│   │   ├── portfolio.astro          # Portfolio completo
│   │   ├── proceso.astro            # El proceso de trabajo
│   │   ├── precios.astro            # Precios (market-aware)
│   │   ├── faq.astro                # FAQ completo
│   │   ├── sobre-nosotros.astro     # Sobre la empresa
│   │   ├── contacto.astro           # Formulario de contacto
│   │   ├── privacidad.astro         # Política de privacidad
│   │   ├── terminos.astro           # Términos de servicio
│   │   ├── 404.astro                # Página de error
│   │   └── api/contact.ts           # Endpoint del formulario (Resend)
│   │
│   └── styles/
│       ├── tokens.css               # Variables de diseño (colores, tipografía)
│       ├── global.css               # Reset CSS y utilidades globales
│       └── animations.css           # Keyframes de animaciones
│
├── public/
│   ├── favicon.svg                  # TODO: Reemplazar con logo real
│   ├── robots.txt
│   └── site.webmanifest
│
├── astro.config.mjs                 # Configuración de Astro
├── wrangler.toml                    # Configuración de Cloudflare
├── .env.example                     # Plantilla de variables de entorno
└── package.json
```

---

## Dónde editar contenido

### Información de la empresa
**Archivo:** [`src/data/site.ts`](src/data/site.ts)

```ts
export const SITE = {
  email: "info@the-ascend.store",  // TODO: Actualizar email
  whatsapp: "33751158825",          // TODO: Actualizar número de WhatsApp
  instagram: "jsuisnnova",          // TODO: Actualizar Instagram
  // ...
};
```

---

### Precios por mercado
**Archivo:** [`src/data/market.ts`](src/data/market.ts)

> ⚠️ IMPORTANTE: Los precios son completamente independientes por país. No son conversiones automáticas.

```ts
// Francia (EUR)
const pricingFR = {
  plans: [
    { id: 'esencial', price: 490 },     // TODO: Precio Francia - Plan Esencial
    { id: 'profesional', price: 890 },  // TODO: Precio Francia - Plan Profesional
    { id: 'premium', price: 1490 },     // TODO: Precio Francia - Plan Premium
  ]
};

// España (EUR)
const pricingES = {
  plans: [
    { id: 'esencial', price: 490 },     // TODO: Precio España
    { id: 'profesional', price: 890 },
    { id: 'premium', price: 1490 },
  ]
};

// Perú (Soles S/)
const pricingPE = {
  plans: [
    { id: 'esencial', price: 1990 },    // TODO: Precio Perú
    { id: 'profesional', price: 3690 },
    { id: 'premium', price: 6190 },
  ]
};
```

---

### Servicios
**Archivo:** [`src/data/services.ts`](src/data/services.ts)

Edita el array `SERVICES` para añadir, quitar o modificar servicios.

---

### Portfolio
**Archivo:** [`src/data/portfolio.ts`](src/data/portfolio.ts)

```ts
// TODO: Reemplazar con proyectos reales
// TODO: Añadir imágenes reales en /public/portfolio/
export const PORTFOLIO = [
  {
    id: "restaurante-chez-marie",
    title: "Chez Marie",
    // ...
  }
];
```

---

### Testimonios
**Archivo:** [`src/data/testimonials.ts`](src/data/testimonials.ts)

```ts
// TODO: Reemplazar con testimonios reales de clientes
// TODO: Añadir fotos reales en /public/testimonials/
export const TESTIMONIALS = [ ... ];
```

---

### FAQ
**Archivo:** [`src/data/faq.ts`](src/data/faq.ts)

Las preguntas están organizadas por categorías (`servicios`, `precios`, `proceso`, `tecnico`, `garantia`).

---

### Diseño y colores
**Archivo:** [`src/styles/tokens.css`](src/styles/tokens.css)

```css
:root {
  --color-primary: #6366f1;    /* Color principal (índigo) */
  --font-display: 'Bricolage Grotesque', ...;
  --font-body: 'Inter', ...;
  /* ... */
}
```

---

### Analytics
**Archivo:** [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)

```ts
// TODO: Reemplazar con tu ID real de Google Analytics (formato: G-XXXXXXXXXX)
const GA_ID = 'G-XXXXXXXXXX';
```

El analytics se inyecta automáticamente cuando el ID no es el placeholder.

---

## Sistema de mercados

El selector de mercado en el navbar permite al visitante elegir entre:
- 🇫🇷 Francia (EUR)
- 🇪🇸 España (EUR)
- 🇵🇪 Perú (PEN)

La selección se guarda en `localStorage` con la clave `ascend_market`.

Al cambiar de mercado:
1. Se actualizan los precios en la página `/precios`
2. Se actualiza el símbolo de moneda
3. Se actualiza la nota de precios
4. La preferencia persiste entre sesiones

Para añadir un nuevo mercado, edita `src/data/market.ts`:
```ts
// Añadir nuevo mercado
export const MARKETS: Record<MarketCode, Market> = {
  // ... mercados existentes ...
  MX: {
    code: 'MX',
    flag: '🇲🇽',
    label: 'Español (MXN)',
    labelShort: 'MX',
    currency: 'MXN',
    currencySymbol: '$',
    locale: 'es-MX',
    lang: 'es',
  },
};
```

---

## Variables de entorno

Copia `.env.example` a `.env` y rellena los valores:

```bash
cp .env.example .env
```

```env
# Resend API Key — para el formulario de contacto
# Obtener en: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxx

# Dominio verificado en Resend para enviar emails
RESEND_FROM_EMAIL=no-reply@the-ascend.store
```

> ⚠️ Nunca subas el archivo `.env` a Git. Está en `.gitignore`.

En producción (Cloudflare Pages), añade estas variables en:
**Dashboard → Settings → Environment Variables**

---

## Comandos disponibles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# TypeScript check
npm run check
```

---

## Despliegue en Cloudflare Pages

### Primera vez

1. **Subir a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/the-ascend
   git push -u origin main
   ```

2. **Cloudflare Pages:**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Selecciona el repositorio
   - Build settings:
     - Build command: `node ./node_modules/astro/astro.js build`
     - Output directory: `dist`

3. **Variables de entorno:**
   - Settings → Environment Variables
   - Añade `RESEND_API_KEY` (production)

4. **Dominio personalizado:**
   - Settings → Custom domains
   - Añade `the-ascend.store`

### Deploys automáticos

Cada push a `main` dispara un deploy automático en Cloudflare Pages.

---

## Arquitectura técnica

| Decisión | Razón |
|----------|-------|
| **Astro 5** | Zero-JS por defecto → Lighthouse ≥ 95 |
| **`output: "server"`** | Necesario para el API endpoint de Resend |
| **CSS Variables** | Sin dependencias, máxima mantenibilidad |
| **React islands** | Solo para `MarketSelector` (requiere interactividad) |
| **Resend** | API de email moderna, sin servidor SMTP propio |
| **Cloudflare Pages** | Edge CDN global, plan gratuito generoso |
| **localStorage** | Persiste preferencia de mercado sin cookies |
| **`<details>` nativo** | FAQ sin JS, accesibilidad perfecta |

### Flujo del formulario de contacto

```
Usuario → /contacto → POST /api/contact → Resend API → info@the-ascend.store
```

El endpoint `src/pages/api/contact.ts` valida los datos, construye un email HTML premium y lo envía via Resend.

---

## Checklist antes de producción

- [ ] Configurar `RESEND_API_KEY` en Cloudflare Pages
- [ ] Verificar dominio de envío en Resend
- [ ] Reemplazar `public/favicon.svg` con logo real
- [ ] Añadir OG image real en `public/og-image.jpg` (1200×630px)
- [ ] Actualizar `GA_ID` en `BaseLayout.astro`
- [ ] Reemplazar testimonios placeholder en `src/data/testimonials.ts`
- [ ] Añadir proyectos reales en `src/data/portfolio.ts`
- [ ] Añadir imágenes de portfolio en `/public/portfolio/`
- [ ] Verificar precios por mercado en `src/data/market.ts`
- [ ] Actualizar número de WhatsApp en `src/data/site.ts`
- [ ] Subir código a GitHub
- [ ] Conectar repositorio a Cloudflare Pages

---

*Construido con ♥ por The Ascend*
