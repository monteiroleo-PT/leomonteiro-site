import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leomonteiro.pt',
  integrations: [
    tailwind(),
    // Não incluir no sitemap a página de erro nem o cartão digital.
    // O cartão existe para quem recebe o link, não para chegar pelo Google.
    sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/cartao') }),
  ],
});
