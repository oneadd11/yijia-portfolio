# Portfolio frontend scope

- Work only inside `/Users/kaia/Documents/portfolio` unless the user explicitly expands the scope.
- Treat this as a frontend-only project. Do not inspect parent folders, the home directory, unrelated applications, or system configuration for normal website work.
- Start from the file or page named by the user. Read only that file and its direct imports, linked styles, scripts, assets, and the smallest relevant design specification.
- Do not inventory or search the entire project by default. Expand a search only when the target cannot be located from direct references, and keep generated/dependency paths excluded.
- Never read or edit `node_modules/`, `dist/`, build metadata, caches, or logs for routine frontend changes.
- Do not edit unrelated pages, cases, prototypes, or design documents. Shared files may be edited only when the requested page directly depends on them; keep shared changes tightly scoped to avoid regressions.

## Frontend map

- Main React page: `index.html` → `src/main.tsx` → `src/App.tsx`, `src/styles/fonts.css`, and `src/styles/theme.css`.
- Static case pages: `cases/*.html` → `cases/case-detail-v3.css`, `styles.css`, and `script.js`.
- Case-specific assets live under `assets/cases/`; shared brand assets live under `assets/brand/`.

## Case 02 rule

For requests that mention Case 02, begin with this minimal set only:

- `cases/nand.html` — Case 02 page markup and content.
- `cases/case-detail-v3.css` — case-detail layout and Case 02 component styles.
- `styles.css` — shared site styles used by the page.
- `script.js` — shared behavior, only when interaction is involved.
- `assets/cases/diagrams/nand-test-system-diagram.png` — Case 02 visual asset, only when the visual is involved.
- `case02-redesign-spec.md` and `design-qa.md` — read only when the request concerns redesign requirements or visual QA.

Do not read other case pages, homepage prototypes, broad strategy documents, or unrelated assets for a Case 02 change unless a direct dependency or the user explicitly requires them.
