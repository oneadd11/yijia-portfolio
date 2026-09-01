# Kaia Portfolio

Personal portfolio website for presenting homepage content, capability areas, and three case-study pages.

## Current Status

- Desktop web layout is the current stable target.
- Mobile layout is still in progress and should be reviewed before final deployment.
- File cleanup is being handled in low-risk stages: documentation, upload exclusions, asset audit, then resource moves/compression after mobile QA.

## Project Structure

```text
.
├── index.html                 # Vite entry for the React homepage
├── src/                       # Homepage React source
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
├── cases/                     # Static case-study pages
│   ├── heat-soak.html         # Case 01
│   ├── nand.html              # Case 02
│   ├── mlcc.html              # Case 03
│   ├── case-detail-v3.css     # Shared case-page styles
│   └── heat-soak.css          # Case 01 specific styles
├── assets/
│   ├── brand/                 # Shared brand marks, logos, and footer graphics
│   ├── icons/                 # Homepage and contact icons
│   └── cases/                 # Case-study diagrams and image assets
├── docs/                      # Public maintenance and content documentation
│   ├── content/
│   └── maintenance/
├── public/
│   └── resume.pdf             # Static resume file used by resume.html
├── resume.html                # Clean resume preview and download page
├── styles.css                 # Shared site styles for static pages
├── script.js                  # Shared behavior for static pages
├── package.json               # Scripts and dependencies
└── vite.config.ts             # Multi-page Vite build config
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment Notes

The intended deployment path is:

```text
GitHub -> Cloudflare Pages
```

Recommended Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: use the Cloudflare default unless a future dependency requires pinning a specific version.

The GitHub repository should contain source files, documentation, and production assets. It should not contain generated folders such as `node_modules/` or `dist/`.

## Maintenance Rules

- Keep homepage changes in `src/` and shared homepage styles in `src/styles/`.
- Keep static case-study page changes inside `cases/` and their directly referenced assets in `assets/cases/`.
- Put brand-level visuals in `assets/brand/`, with logos in `assets/brand/logos/` and backgrounds in `assets/brand/backgrounds/`.
- Put reusable icons in `assets/icons/`.
- Put case diagrams in `assets/cases/diagrams/` and case-specific icons in `assets/cases/icons/`.
- Keep public maintenance docs in `docs/maintenance/` and public text/reference docs in `docs/content/`.
- Keep the resume PDF at `public/resume.pdf`; the homepage footer links to `resume.html`, which previews and downloads that file.
- Use descriptive asset names that include the case or page context, for example `case02-nand-system-diagram.png`.
- Avoid moving or renaming assets while mobile layout work is still active unless all references are updated and tested.
- Keep temporary demos, mobile previews, and design experiments out of the deployment source when preparing for GitHub.

## Upload Safety Checklist

Before uploading to GitHub:

- Confirm no `.env`, `.env.*`, API keys, tokens, credentials, or private config files are included.
- Confirm `node_modules/`, `dist/`, logs, caches, and OS files are excluded.
- Check that desktop pages still build successfully.
- Re-check mobile layouts before final deployment.
- Verify all case-study images load from the production build.
- Review large images and compress picture-like assets after mobile layout is complete.
- Keep temporary demo and preview HTML files out of GitHub unless they are intentionally being shared.

## Known Follow-Ups

- Finish mobile layout QA and responsive adjustments.
- Decide which remaining design, audit, and prototype `.md` files should remain public in GitHub.
- Demo and preview files such as `label-color-demo.html`, `mobile-preview.html`, and `case03-section-layout-demos.html` are currently excluded from GitHub.
- Resume link is connected through `resume.html`, `public/resume.pdf`, and the high-resolution `public/resume-preview.png`; replace the PDF and regenerate the preview when the resume is updated.
