# Center for Digital Twins in Manufacturing (CDTM)

Website for the NSF Industry-University Cooperative Research Center (IUCRC) for Digital Twins in Manufacturing, hosted at [cdtm-iucrc.org](https://cdtm-iucrc.org).

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── DTCNav.astro          # Site navigation
│   ├── DTCHero.astro         # Hero section
│   └── DTCFooter.astro       # Site footer
├── content/                  # JSON data files
├── layouts/
│   └── MainLayout.astro      # Base layout template
├── pages/
│   ├── index.astro           # Homepage
│   ├── faculty.astro         # Faculty researchers
│   ├── research.astro        # Research projects
│   └── resources.astro       # Resources
└── styles/
    └── global.css            # Global styles and theme
```

## Tech Stack

- [Astro](https://docs.astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- GitHub Pages — hosting with custom domain

## Deployment

Deployed automatically via GitHub Actions on push to `main`. The workflow builds the Astro site and deploys to GitHub Pages at [cdtm-iucrc.org](https://cdtm-iucrc.org).

## Content Management

- **Page content**: Edit `.astro` files in `src/pages/`
- **Faculty data**: Edit JSON files in `src/content/`
- **Navigation**: Modify `src/components/DTCNav.astro`
- **Styling**: Update `src/styles/global.css`
- **Images**: Add to `public/images/` and reference in components
