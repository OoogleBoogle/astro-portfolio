import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, frontendistahtmlMinify(), compress()],
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['swup']
    }
  }
});