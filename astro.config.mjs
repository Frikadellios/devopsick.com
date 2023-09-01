import i18n from "astro-i18n"
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";


import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(), mdx(), tailwind(), react(), partytown(), sitemap()]
});