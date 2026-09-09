# CV

[![Astro](https://img.shields.io/badge/Astro-7.2-BC52EE?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-11B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100-F9B234?logo=lighthouse)](https://pagespeed.web.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Use this template](https://img.shields.io/badge/%20-Use_this_template-2EA043?logo=github)](https://github.com/ZhukDI/cv/generate)

<p align="center">
  <img src="screenshots/poster-1-hero.png" alt="Minimalist CV — Astro theme preview" width="820">
</p>

A print-ready CV/resume template for Astro. Your whole CV lives in one typed config file, ships zero client-side JavaScript, follows the system dark mode automatically, and turns into a clean recruiter-ready PDF with Ctrl+P.

## Live demo

- **Theme demo (fictional data)**: [cv.dzhuk.com/demo](https://cv.dzhuk.com/demo)
- **Author's site (real data)**: [cv.dzhuk.com](https://cv.dzhuk.com)

## Features

- 📝 **Single Config File** - Update all your cv data in [one place](./src/data/cv.ts)
- 🖨️ **Print Optimized** - Specially designed print styles: press `Ctrl + P` for a clean, one-column PDF
- 🌓 **Dark Mode** - Follows the system theme (`prefers-color-scheme`) with no JavaScript and no flash
- 🎨 **Minimalist Design** - Clean, professional layout focused on content
- 📱 **Responsive** - Looks great on all devices, from mobile to desktop
- ⚡ **Zero JavaScript** - Ships with no client-side JS for lightning-fast loads
- 🚀 **Static Generation** - Pre-rendered HTML for optimal performance
- 🎯 **SEO Friendly** - Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap and canonical URLs

## Screenshots

| Dark mode | Print to PDF | Responsive |
| :---: | :---: | :---: |
| ![Dark mode](screenshots/poster-2-dark.png) | ![Print to PDF](screenshots/poster-3-print.png) | ![Responsive](screenshots/poster-4-responsive.png) |

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 22.12+

### Installation

The fastest way — click **[Use this template](https://github.com/ZhukDI/cv/generate)** to create your own copy. Or clone manually:

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZhukDI/cv.git
   cd cv
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:4321](http://localhost:4321)** in your browser

5. **Customize your CV**

   Edit the [src/data/cv.ts](./src/data/cv.ts) file to add your personal information, work experience, education, and skills. The [/demo](https://cv.dzhuk.com/demo) page is rendered from [src/data/demo-cv.ts](./src/data/demo-cv.ts) — a fictional dataset kept as a neutral example for the theme listing; delete the page and its data file if you don't need it.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run screenshots`     | Regenerate promo screenshots in `screenshots/` (requires a prior `npm run build` and local Chrome) |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ☁️ Deployment

### Cloudflare Pages (production)

The site runs on [Cloudflare Pages](https://pages.cloudflare.com/) and is connected to this GitHub repository:

- Push or merge to `main` → automatic production build and deploy
- Pull requests → automatic preview builds (see the `Cloudflare Pages` check on the PR for the preview URL and logs)

### Docker (self-hosted alternative)

If you prefer not to use Cloudflare, the site can be served from an nginx container:

```bash
docker build -t zhukdi/dzhuk-cv:latest .
docker compose up -d   # serves the image on http://localhost:8080
```

The multi-stage `Dockerfile` builds the site with Node and serves `dist/` via nginx.

## 📚 Documentation

- [Useful tools for SEO & performance](./docs/useful-tools.md) - Online tools for checking page speed, meta tags, structured data, and more

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) - Original Next.js implementation
- [Astro](https://astro.build/) for the amazing framework
