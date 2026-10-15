# Maison Lumière

React + Vite + Tailwind site (Home, Services, Gallery, Contact).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

Most text, prices, images and contact details live in `src/constants/content.js`.

## Contact form

By default the form opens WhatsApp with the enquiry prefilled, sent to
`VITE_WHATSAPP_NUMBER` (defaults to 917017905835). If `VITE_BACKEND_URL` is set,
it posts to `${VITE_BACKEND_URL}/api/contact` instead. For GitHub Pages, set
these under Settings → Secrets and variables → Actions → Variables.

## Deploying to GitHub Pages

1. Settings → Pages → Source: **GitHub Actions**.
2. Push to `main`; `.github/workflows/deploy.yml` builds and publishes the site.
   It is served at `https://<user>.github.io/beauty/` until a custom domain is set.
3. Custom domain: add `public/CNAME` containing your domain (e.g. `beauty.codebunny.net`),
   push, then add a DNS `CNAME` record pointing that domain to `<user>.github.io`.
   The workflow switches the base path to `/` automatically when `public/CNAME` exists.

Vercel (`vercel.json`) and Netlify (`public/_redirects`) also work out of the box.
