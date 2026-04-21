<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.


# Project Structure

```
dev-portfolio/
├── app/
│   ├── layout.tsx      ← Root Layout (wraps every page)
│   ├── page.tsx        ← Home page route (renders at "/")
│   └── globals.css     ← Global styles, imported by layout
├── public/             ← Static assets
├── next.config.ts
└── package.json
```

# How RootLayout is Invoked

Next.js App Router automatically picks up `app/layout.tsx` as the root layout — it is never called directly. On a request to `/`, Next.js finds `app/page.tsx` and wraps it in `app/layout.tsx`, passing it as `children`.

Font CSS variables (`--font-courier-prime`, `--font-raleway`) are set on `<html>` in layout.tsx, making them available everywhere via `var(...)` in globals.css.

## Layout Nesting

If `app/about/layout.tsx` exists, it becomes a nested layout — RootLayout wraps it, and it wraps `app/about/page.tsx`:

```
RootLayout (app/layout.tsx)
  └── AboutLayout (app/about/layout.tsx)
        └── AboutPage (app/about/page.tsx)
```

<!-- END:nextjs-agent-rules -->
