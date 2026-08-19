# Bingdi Wang — Portfolio Website

A responsive, bilingual résumé website for finance, analytics and equity-research internship applications.

## Preview locally

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` — page content and structure
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and scroll animations
- `assets/Bingdi_Wang_Resume_EN.pdf` — downloadable résumé
- `assets/bingdi-wang-profile.jpg` — homepage portrait

## Language and privacy

- Visitors can switch between English and Chinese from the navigation bar.
- Their selection is remembered in the browser.
- The public page shows an email address and LinkedIn URL, but not a phone number or visa details.

## Publishing recommendation

Use a public GitHub repository as the source of truth and deploy it to Cloudflare Pages. A custom domain can be connected later. Hosting inside mainland China would require an ICP filing; overseas static hosting cannot guarantee identical availability on every mainland network.

## Before publishing

1. Add a GitHub URL and selected course projects after the repositories are ready.
2. Consider replacing the long email address with a concise professional address.
3. Add measurable project outcomes when they can be verified.

See `GITHUB_PROJECTS_GUIDE_CN.md` for the suggested project workflow.
