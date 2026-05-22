# ClaimAdvisor

Free legal claim eligibility and estimation tools for US residents. Built with Next.js 15, Tailwind CSS, and deployed on Vercel.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with tool overview |
| `/car-accident-calculator` | Multi-step settlement estimator |
| `/workers-comp-calculator` | Weekly benefit + total claim estimator |
| `/mesothelioma-eligibility` | Asbestos exposure eligibility checker |
| `/about` | About the site and methodology |
| `/contact` | Contact form |
| `/privacy-policy` | Full GDPR/CCPA-compliant privacy policy |
| `/terms` | Terms of use and disclaimers |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Search engine directives |

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Set environment variable on Vercel:
- `SITE_URL` = `https://www.claimadvisor.info`

## AdSense Setup

1. Add your AdSense publisher ID to `app/layout.tsx`:
   ```html
   <meta name="google-adsense-account" content="ca-pub-YOUR_ID_HERE" />
   ```

2. Replace ad slot placeholders in `components/AdUnit.tsx` with real `<ins>` tags.

3. Ad slots used across the site:
   - `3001000001` — Car accident sidebar
   - `3001000002` — Car accident in-content
   - `3002000001` — Workers comp sidebar
   - `3002000002` — Workers comp in-content
   - `3003000001` — Mesothelioma sidebar
   - `3003000002` — Mesothelioma in-content
   - `4001000001` — About sidebar
   - `1234567890` — Homepage leaderboard
   - `2345678901` — Homepage in-content rectangle

## Calculator Logic

**Car Accident:**
`settlement = (medical_bills × multiplier[1.5–5x based on severity] + lost_wages) × (1 - fault_pct)`

**Workers Comp:**
`weekly_benefit = min(max(weekly_wage × 0.667, state_min), state_max)`
`total = weekly_benefit × weeks_off`

**Mesothelioma:**
Score-based: occupational exposure (3pts) + years exposed (1–3pts) + diagnosis confirmed (5pts) → Strong (≥7) / Moderate (3–6) / Unlikely (<3)
