import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wildpointerorg.github.io',
  output: 'static',
  base: '/site/',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
