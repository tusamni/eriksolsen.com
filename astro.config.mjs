import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    adapter: netlify(),
    experimental: {
        fonts: [{
            provider: "local",
            name: "GeneralSans",
            cssVariable: "--font-generalsans",
            variants: [
                {
                    weight: 300,
                    style: "normal",
                    src: ["./src/assets/fonts/GeneralSans-Light.woff2"]
                },
                {
                    weight: 400,
                    style: "normal",
                    src: ["./src/assets/fonts/GeneralSans-Regular.woff2"]
                },
                {
                    weight: 500,
                    style: "normal",
                    src: ["./src/assets/fonts/GeneralSans-Medium.woff2"]
                },
                {
                    weight: 600,
                    style: "normal",
                    src: ["./src/assets/fonts/GeneralSans-Semibold.woff2"]
                },
                {
                    weight: 700,
                    style: "normal",
                    src: ["./src/assets/fonts/GeneralSans-Bold.woff2"]
                }
            ]
        }]
    },
    integrations: [alpine(), sitemap()],
    site: "https://eriksolsen.com",
    trailingSlash: "always",
    vite: {
        plugins: [tailwindcss()],
        optimizeDeps: {
            exclude: ["alpinejs"]
        }
    },
});