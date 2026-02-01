# NUB Central Social Welfare Club Website

A single-page campaign site for the North South University's Central Social Welfare Club (NCSW). The site highlights the club's mission, leadership, gallery, program timeline, and contact channels while leaning on a warm editorial art direction and subtle in-view animations.

## Features
- **Hero storytelling** with animated impact counters, quick CTAs, and a program highlight card.
- **Data-driven sections** for committee members, gallery, and program posters sourced directly from the `public/` asset folders.
- **Dark/light theme toggle** stored in `localStorage` for repeat visitors.
- **Accessible media lightbox** with keyboard navigation for the gallery.
- **Progressive reveal animations** via `IntersectionObserver` for a polished scroll experience.

## Project Structure
```
public/
   Committe Member/   # JPEG portraits pulled into the leadership grid
   gallery/           # Impact photography for the gallery + lightbox
   program/           # Poster art for the flagship program timeline
   icon/              # Contact icons used in the address cards
   manifest.json      # (Optional) PWA/app metadata placeholder
index.html
styles.css
script.js
```

## Getting Started
1. **Clone the repo** (once you create it on GitHub):
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. **Install an optional static server** (recommended for local testing):
   ```bash
   npm install -g serve
   ```
3. **Run the site** from the project root:
   ```bash
   serve .
   ```
   Then open `http://localhost:3000` (or the port shown in the terminal).

> Tip: You can also double-click `site/index.html` to open it directly in a browser, but running through a local server ensures relative asset paths resolve exactly as they will in production.

## Updating Content
- **Committee**: Drop new JPGs into `public/Committe Member/` and update the `committeePhotos`, `committeeNames`, and `leadershipRoles` arrays inside `script.js`.
- **Gallery**: Add JPGs to `public/gallery/` and extend the `galleryImages` array.
- **Programs**: Add posters to `public/program/` and edit the `programs` array.
- **Styling**: Adjust CSS variables in `styles.css` for typography, spacing, or palette tweaks.

## Deployment
Because the project is plain HTML/CSS/JS, any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Deploy the repository root as the web root and ensure the `public/` folder stays alongside `index.html` so every relative path resolves.

## License
Released under the MIT License. See [LICENSE](LICENSE).
