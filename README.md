# City Sound — redesign

Local rebuild of [citysound.ae](https://citysound.ae/) with a sharper UI/UX: full-bleed hero, service storytelling, clear contact paths, and 24/7 call-back flow.

## Run

```bash
npm install
npm run dev
```

## Pages

| Route | Original |
| --- | --- |
| `/` | `index.html` |
| `/services/sound` | `zvuk.html` |
| `/services/lighting` | `svet.html` |
| `/services/multimedia` | `mult.html` |
| `/services/karaoke` | `karaoke.html` |
| `/services/effects` | `spec.html` |
| `/services/entertainment` | `keys.html` |

Open e.g. `http://localhost:5173/services/lighting` for the lighting topic page.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Live on GitHub Pages: [moonmoonnotsun.github.io/city-sound](https://moonmoonnotsun.github.io/city-sound/)

Pushes to `main` build and publish automatically (Actions → Pages). In the repo **Settings → Pages**, set Source to **GitHub Actions**.

## Content & assets

- Copy and contact details mirror the live site (phone, email, Instagram).
- Original imagery lives in `public/assets/img/` (downloaded from citysound.ae).
- HTML mirror of the source site is in `source-mirror/` for reference.

## Stack

Vite + React + TypeScript.
