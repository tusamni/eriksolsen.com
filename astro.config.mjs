// astro.config.mjs
import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

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
        icon(),
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
