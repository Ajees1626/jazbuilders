# SEO & Google Search Console – Jaz Builders Group

## What’s already done in this project

- **index.html**: Title “Jaz Builders Group | Construction & Builders”, meta description, keywords, canonical `https://jazbuildersgroup.com/`, `robots: index, follow`, Open Graph and Twitter tags.
- **Canonical URLs**: Every page gets an HTTPS canonical via `PageSEO` (e.g. `https://jazbuildersgroup.com/about`).
- **public/robots.txt**: `User-agent: *` with `Allow: /` and `Sitemap: https://jazbuildersgroup.com/sitemap.xml`.
- **public/sitemap.xml**: Home, About, Service, Project, Contact, Careers with `https://jazbuildersgroup.com` URLs.
- **HTTPS redirect**: `public/.htaccess` 301 redirect from HTTP to HTTPS (for Apache/Hostinger).
- **JSON-LD**: LocalBusiness + Organization on the home page (address, contact, area served, opening hours).
- **Lazy loading**: Routes are lazy-loaded in `App.jsx`; add `loading="lazy"` and explicit `width`/`height` (or `aspect-ratio`) on `<img>` tags for better LCP and Core Web Vitals.
- **Heading hierarchy**: Use a single `<h1>` per page (e.g. in the hero) and then `<h2>` → `<h3>` in order; avoid skipping levels.

## Get indexed on Google quickly (Google Search Console)

1. **Deploy the site**  
   Build and upload to Hostinger:
   - `npm run build`
   - Upload the contents of `dist/` (including `index.html`, `sitemap.xml`, `robots.txt`, `.htaccess`) to your hosting root (e.g. `public_html`).

2. **Turn on HTTPS**  
   In Hostinger: **Advanced → Force HTTPS** (or use the existing `public/.htaccess` if the server is Apache).

3. **Open Google Search Console**  
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add property: **URL prefix** → `https://jazbuildersgroup.com`.
   - Verify ownership (HTML file upload, DNS TXT, or HTML meta tag as GSC suggests).

4. **Submit sitemap**  
   In GSC: **Sitemaps** → add: `https://jazbuildersgroup.com/sitemap.xml` → Submit.

5. **Request indexing for the homepage**  
   In GSC: **URL Inspection** → enter `https://jazbuildersgroup.com` → **Request indexing**. Optionally do the same for `https://jazbuildersgroup.com/about`, `/service`, `/project`, `/contact`.

6. **Check robots.txt**  
   In GSC: **Settings → robots.txt** (or open `https://jazbuildersgroup.com/robots.txt`) and confirm it shows `Allow: /` and the Sitemap URL.

After this, Google will crawl and index the site; indexing usually happens within a few days. Re-submitting the sitemap and using “Request indexing” for the main URLs helps get indexed faster.

## File locations (summary)

| Purpose              | File |
|----------------------|------|
| Default SEO / GSC    | `frontend/index.html` |
| Sitemap              | `frontend/public/sitemap.xml` |
| Robots               | `frontend/public/robots.txt` |
| HTTPS + SPA routing  | `frontend/public/.htaccess` |
| Per-page SEO + canonical | `frontend/src/components/PageSEO.jsx` |
| Local Business JSON-LD | `frontend/src/pages/Home.jsx` (HOME_JSON_LD) |

## Image optimization (suggestions)

- Use **WebP** where possible (you already use Cloudinary WebP).
- Add **width** and **height** (or CSS `aspect-ratio`) to avoid layout shift (CLS).
- Add **loading="lazy"** for images below the fold.
- Keep hero image in a `<link rel="preload" as="image">` (already done on Home).

## Heading hierarchy

- One **&lt;h1&gt;** per page (e.g. “Welcome to Jaz Builders Group” or the main service/project title).
- Then **&lt;h2&gt;** for main sections, **&lt;h3&gt;** for subsections; don’t skip levels (e.g. don’t go from &lt;h2&gt; to &lt;h4&gt;).
