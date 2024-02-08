import { renderers } from './renderers.mjs';
import { manifest } from './manifest_H8NfDQLq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_EUsF9t8O.mjs');
const _page1 = () => import('./chunks/index_h1r9CLHN.mjs');
const _page2 = () => import('./chunks/_.._2p-F6E_G.mjs');
const _page3 = () => import('./chunks/index_kEtkjeTx.mjs');
const _page4 = () => import('./chunks/success_wJHaE6HQ.mjs');
const _page5 = () => import('./chunks/_.._n6vlgon1.mjs');
const _page6 = () => import('./chunks/_.._XYdVBdf4.mjs');
const _page7 = () => import('./chunks/_.._Rx2D3kAE.mjs');
const _page8 = () => import('./chunks/_.._EKTbiMsk.mjs');
const _page9 = () => import('./chunks/index_T_ZUVpdT.mjs');
const _page10 = () => import('./chunks/faq_zkuXkzPm.mjs');
const _page11 = () => import('./chunks/gear_oZGOmJ_W.mjs');
const _page12 = () => import('./chunks/pricing_F7chX7CY.mjs');
const _page13 = () => import('./chunks/_.._XltJ6luL.mjs');
const _page14 = () => import('./chunks/testimonials_zUhoBner.mjs');
const _page15 = () => import('./chunks/index_IS2OVdcj.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/contact/success.astro", _page4],
    ["src/pages/photography/photo/[...file].astro", _page5],
    ["src/pages/photography/shoots/[category]/[...page].astro", _page6],
    ["src/pages/photography/shoots/[manufacturer]/[...page].astro", _page7],
    ["src/pages/photography/shoots/[...page].astro", _page8],
    ["src/pages/photography/index.astro", _page9],
    ["src/pages/photography/faq.astro", _page10],
    ["src/pages/photography/gear.astro", _page11],
    ["src/pages/photography/pricing.astro", _page12],
    ["src/pages/photography/shoots/[...slug].astro", _page13],
    ["src/pages/photography/testimonials.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "62f05d76-da2a-40fe-b7bc-a887bb3bf925"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
