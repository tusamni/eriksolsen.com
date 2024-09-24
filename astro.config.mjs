import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),
	integrations: [
		alpine(),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "dracula-soft"
			}
		}),
		sitemap(),
		tailwind({ applyBaseStyles: true }),
		partytown()
	],
	output: "hybrid",
	redirects: {
		"/about/": "/",
		"/photography/2017-cota-classic/": "/photography/shoots/2017/11/cota-classic/",
		"/photography/2018-green-930-turbo/": "/photography/shoots/2018/05/1976-green-930-turbo/",
		"/photography/2018-coffee-with-cars/": "/photography/shoots/2018/08/coffee-with-cars/",
		"/photography/2019-shop-shoot/": "/photography/shoots/2019/12/shop-shoot/",
		"/photography/2019-purple-porsche-911sc/": "/photography/shoots/2019/05/purple-porsche-911sc/",
		"/photography/2019-porsches-at-the-shop/": "/photography/shoots/2019/03/porsches-at-the-shop/",
		"/photography/2019-coffee-with-cars/": "/photography/shoots/2019/05/coffee-with-cars/",
		"/photography/2019-treaty-oak-car-show/": "/photography/shoots/2019/05/treaty-oak-car-show/",
		"/photography/2019-porsche-911s-targa-signal-yellow/": "/photography/shoots/2019/08/1973-porsche-911s-targa-signal-yellow/",
		"/photography/2020-coffee-with-cars/": "/photography/shoots/2020/01/coffee-with-cars/",
		"/photography/2020-lit-show-day-one/": "/photography/shoots/2020/02/lit-show-day-one/",
		"/photography/2020-lit-show-day-two/": "/photography/shoots/2020/02/lit-show-day-two/",
		"/photography/2020-lit-show-day-three/": "/photography/shoots/2020/02/lit-show-day-three/",
		"/photography/2020-lit-show-day-four/": "/photography/shoots/2020/03/lit-show-day-four/",
		"/photography/2021-pca-event/": "/photography/shoots/2021/06/hill-country-pca-event/",
		"/photography/2021-porsche-930-turbo-flachbau/": "/photography/shoots/2021/06/1989-porsche-930-turbo-flachbau/",
		"/photography/2022-lit-show-day-one/": "/photography/shoots/2022/02/lit-show-day-one/",
		"/photography/2022-backdraft-cobra/": "/photography/shoots/2022/11/1965-backdraft-cobra/"
	},
	security: {
		checkOrigin: true
	},
	site: "https://eriksolsen.com"
});