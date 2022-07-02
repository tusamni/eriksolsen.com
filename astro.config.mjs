// astro.config.mjs
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'material-lighter',
            wrap: true
        }
    },
    site: 'https://eriksolsen.com',
    integrations: [
        sitemap()
    ]
});