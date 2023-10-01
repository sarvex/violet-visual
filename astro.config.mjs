import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), mdx(), prefetch(), sitemap(), tailwind()]
});