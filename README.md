# The Lab — site

Blog and project index for **The Lab** ("Reps in the lab: builds and contributions sparked by the news.").

**Status:** Active. Scaffold only: home with a "Currently building" board, project index, blog. The site is private (Vercel Authentication) and marked `noindex`.

## What works

- Routes: `/`, `/projects`, `/blog`, `/blog/:slug`, and a not-found page.
- Posts are markdown files in `src/content/posts/`, rendered with `react-markdown` and shadcn Typeset.
- Projects are typed data in `src/content/projects.ts`.
- `noindex` via meta tag, `public/robots.txt` and an `X-Robots-Tag` header in `vercel.json`.

## Known limitations

- Client-rendered SPA: link previews (LinkedIn/OG) will not show post titles.
- Light theme only; no search, tags, RSS or analytics.

## Add a post

Create `src/content/posts/<slug>.md`:

```md
---
title: Post title
date: 2026-11-22
summary: One line for the list view.
draft: true # optional; drafts are hidden
---
```

## Add a project

Add an entry to `src/content/projects.ts`. `stage: "building"` shows it on the home board; `status` is the repo status (Active, Parked or Archived).

## Develop

```bash
pnpm install
pnpm dev      # local dev server
pnpm test     # vitest
pnpm build    # typecheck + production build
```

## Deploy

Import the repo in Vercel (framework preset: Vite), then enable Settings → Deployment Protection → Vercel Authentication. `vercel.json` handles the SPA rewrite and the noindex header.
