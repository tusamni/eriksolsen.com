// astro.config.mjs
import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ hostname: "*.eriksolsen.com" }],
    },
    integrations: [
        alpine(),
        icon(),
        mdx({
            syntaxHighlight: "shiki",
            shikiConfig: { theme: "dracula-soft" },
        }),
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    site: "https://eriksolsen.com",
});
