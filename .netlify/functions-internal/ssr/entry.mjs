import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C4hMftkp.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DwltzDt2.mjs');
const _page1 = () => import('./chunks/index_BZzmRxdu.mjs');
const _page2 = () => import('./chunks/_.._-UZekc-8.mjs');
const _page3 = () => import('./chunks/success_CFERAsDi.mjs');
const _page4 = () => import('./chunks/index_Dr-YnX6O.mjs');
const _page5 = () => import('./chunks/faq_AdQogNjN.mjs');
const _page6 = () => import('./chunks/_.._Dus4vKF4.mjs');
const _page7 = () => import('./chunks/pricing_3r83mhPQ.mjs');
const _page8 = () => import('./chunks/_.._RM4p62En.mjs');
const _page9 = () => import('./chunks/_.._DTvVc1GG.mjs');
const _page10 = () => import('./chunks/index_CRrz6gF8.mjs');
const _page11 = () => import('./chunks/privacy_A-2NrFlW.mjs');
const _page12 = () => import('./chunks/index_DU3u0oO1.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/contact/success.astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/photography/faq.astro", _page5],
    ["src/pages/photography/photo/[...file].astro", _page6],
    ["src/pages/photography/pricing.astro", _page7],
    ["src/pages/photography/shoots/[...page].astro", _page8],
    ["src/pages/photography/shoots/[...slug].astro", _page9],
    ["src/pages/photography/index.astro", _page10],
    ["src/pages/privacy.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "09b2635c-3466-4efc-8ca9-7c4dd618a625"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
