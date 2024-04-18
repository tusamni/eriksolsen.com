// astro.config.mjs
import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://eriksolsen.com",
    integrations: [
        alpine(),
        mdx({
            syntaxHighlight: "shiki",
            shikiConfig: {
                theme: "dracula-soft",
            },
        }),
        sitemap(),
        tailwind({
            applyBaseStyles: true,
        }),
    ],
    output: "hybrid",
    adapter: netlify({ cacheOnDemandPages: true }),
});
