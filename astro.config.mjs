import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['swup'],
    }
  }
});