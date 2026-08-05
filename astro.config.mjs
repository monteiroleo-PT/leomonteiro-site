import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leomonteiro.pt',
  integrations: [
    tailwind(),
    // Não incluir a página de erro no sitemap
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});
