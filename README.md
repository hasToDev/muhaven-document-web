# muhaven-document-web

GitHub Pages host for the **MuHaven documentation site** —
[docs.muhaven.app](https://docs.muhaven.app).

> ⚠️ This repo holds the **built static output only**. Do not edit files here
> by hand — they are overwritten on every deploy.

## How it's built

The source lives in the main MuHaven repo at `docs-site/` (VitePress). Deploy
with:

```bash
cd muhaven/docs-site
pnpm deploy                 # build + sync .vitepress/dist/ into this repo
cd ../../muhaven-document-web
git add -A && git commit -m "docs: <summary>" && git push
```

GitHub Pages publishes this repo's `master` branch from the root, served at the
custom domain in `CNAME` (`docs.muhaven.app`). `.nojekyll` disables Jekyll so
asset folders beginning with `_` are served as-is.
