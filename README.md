# Maison Lumière

React + Vite + Tailwind site (Home, Services, Gallery, Contact).

## Layout

- `source/` — the editable site (React source, styles, content).
- Repo root (`index.html`, `404.html`, `assets/`, `CNAME`) — the built site that
  GitHub Pages serves ("Deploy from a branch", `main`, `/ (root)`).

## Editing

Most text, prices, images and contact details live in `source/src/constants/content.js`.
Push your change to `main`; the "Build site" workflow rebuilds the site and commits
the output to the repo root, and GitHub Pages publishes it.

## Run locally

```bash
cd source
npm install
npm run dev      # http://localhost:5173
```

## Contact form

By default the form opens WhatsApp with the enquiry prefilled, sent to
`VITE_WHATSAPP_NUMBER` (defaults to 917017905835). If `VITE_BACKEND_URL` is set,
it posts to `${VITE_BACKEND_URL}/api/contact` instead. Set these under
Settings → Secrets and variables → Actions → Variables.
