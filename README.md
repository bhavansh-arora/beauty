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

The form posts to `${VITE_BACKEND_URL}/api/contact`. Copy `.env.example` to `.env`
and set `VITE_BACKEND_URL` to your backend. Without it, submissions show the error toast.

## Deploying

- **Vercel:** import the repo; `vercel.json` handles page routing.
- **Netlify:** build command `npm run build`, publish directory `dist`; `public/_redirects` handles routing.
