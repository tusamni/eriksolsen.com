// astro.config.mjs
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'material-lighter',
            wrap: true
        }
    },
    server: { host: true },
    site: 'https://eriksolsen.com',
    integrations: [mdx(), sitemap(), tailwind(), image()]
});