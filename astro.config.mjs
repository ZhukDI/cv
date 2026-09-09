// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://cv.dzhuk.com',
  integrations: [
    sitemap({
      // The /demo page shows fictional data for the theme listing — keep it out of search indexes.
      filter: (page) => !page.includes('/demo')
    })
  ]
});