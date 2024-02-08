import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, h as addAttribute } from './astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                                                                 */

const $$Astro$2 = createAstro("https://eriksolsen.com");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${maybeRenderHead()}<div class="photo-gallery"> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/Gallery.astro", void 0);

const $$Astro$1 = createAstro("https://eriksolsen.com");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Grid;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-8 not-prose"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/Grid.astro", void 0);

const $$Astro = createAstro("https://eriksolsen.com");
const $$GridImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GridImage;
  const { height = "h-24 md:h-48" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grow", height], "class:list")} data-astro-cid-mb5ba34f> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/GridImage.astro", void 0);

export { $$Grid as $, $$GridImage as a, $$Gallery as b };
