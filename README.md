# portfolio.tim-hch.com

Personal portfolio site for Tim Ho (0xtim.eth / @haochizzle).
Built with Astro, deployed to Vercel.

## Local dev
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
```

## Deploy
Push to GitHub → Vercel auto-builds. Connect custom domain `portfolio.tim-hch.com` in Vercel dashboard → DNS CNAME.

## Update content
- `src/pages/index.astro` — all content sections (hero, work, videos, interviews, writing, social, contact)
- `public/cv.pdf` — current CV download
- `public/favicon.svg` — favicon

## Placeholders to fill before launch
1. **Headshot photo** — drop new pro headshot into `src/assets/headshot.jpg` and update `<div class="photo-placeholder">` to `<img>`
2. **Trailer IDs** — `trailers[]` array at top of `index.astro` has placeholder IDs like `TRAILER_ZY0N_ID`. Replace with real YouTube video IDs from the 90 Seconds to Crypto back catalog.
3. **Email** — confirm `tim@tim-hch.com` (placeholder) is correct
4. **GitHub handle** — confirm `0xtim` in footer
