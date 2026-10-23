# SSIB Infra Builders — corporate website

Frontend-only React site (Vite, React Router, Tailwind CSS v4, Framer Motion, Lucide). No backend, no environment variables.

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Pages (as per the website quotation)
| URL | Page | Sections |
| --- | --- | --- |
| `/` | Home | Hero & stats, featured services, featured projects, clients, key strengths, company profile, contact band |
| `/about` | About Us | Company story, journey, vision & mission, main objectives, clients, company profile |
| `/projects` | Projects | Featured projects, full project list with filters, photo gallery with lightbox, client showcase |
| `/services` | Our Services | All six services in detail, machinery fleet & bitumen plants |
| `/contact` | Contact Us | Address, phone, email, GSTIN, Google Map, enquiry form |

Page files live in `src/pages/`; sections in `src/components/`.

## Editing content
All text, services, projects, gallery photos, clients and contact details live in `src/data/site.js`,
taken from *SSIB INFRA COMPANY PROFILE 2026.pdf*. Components only read from that file.

`contact.whatsapp`, `contact.hours` and `contact.social` are empty because they are not in the company profile.
Fill them in and they appear on the Contact page automatically.

## Hosting (important)
Pages use real URLs (`/about`, `/projects` …), so the server must return `index.html` for them.
Fallback configs are included: `public/.htaccess` (Apache / cPanel), `public/_redirects` (Netlify) and `vercel.json` (Vercel).

## Assets (`public/`)
- `images/logo-ssib.png`, `images/logo-ssib-mark.png` — official logo with the white background removed (colours unchanged). Designed for light surfaces.
- `images/*.webp` — photos cropped from the company profile pages.
- `docs/SSIB-Infra-Company-Profile-2026.pdf` — web-optimised copy of the profile (all 25 pages, images recompressed; 36 MB → 5.2 MB).

## Contact form
Validated in the browser only. On submit it prepares a pre-filled email (mailto) to the company address
and clearly states that nothing was sent. Connect a form service if real submissions are required.
