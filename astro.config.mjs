import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.tim-hch.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
