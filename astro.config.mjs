import { defineConfig, fontProviders } from "astro/config";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    adapter: netlify(),
    experimental: {
        fonts: [
			{
				provider: fontProviders.google(),
				name: "Sora",
				cssVariable: "--font-sora",
				weights: ["100 800"]
			},
			{
				provider: fontProviders.google(),
				name: "Unbounded",
				cssVariable: "--font-unbounded",
				weights: ["200 900"]
			}
		]
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