# CV

[![Astro](https://img.shields.io/badge/Astro-5.16-BC52EE?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-11B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean and modern web app that renders a minimalist CV/Resume with a print-friendly layout. Built with Astro for maximum performance and zero JavaScript by default.

## ✨ Features

- 📝 **Single Config File** - Update all your cv data in [one place](./src/data/cv.ts)
- 🎨 **Minimalist Design** - Clean, professional layout focused on content
- 📱 **Responsive** - Looks great on all devices, from mobile to desktop
- 🖨️ **Print Optimized** - Specially designed print styles for physical copies
- ⚡ **Zero JavaScript** - Ships with no client-side JS for lightning-fast loads
- 🚀 **Static Generation** - Pre-rendered HTML for optimal performance
- 🎯 **SEO Friendly** - Optimized metadata for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 22+

### Installation

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

   Edit the [src/data/cv.ts](./src/data/cv.ts) file to add your personal information, work experience, education, and skills.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

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
