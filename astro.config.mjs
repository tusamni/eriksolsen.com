// astro.config.mjs
import { defineConfig } from "astro/config";

import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: "dracula-soft",
            wrap: true,
        },
    },
    site: "https://eriksolsen.com",
    integrations: [
        alpine(),
        mdx(),
        sitemap(),
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
});
