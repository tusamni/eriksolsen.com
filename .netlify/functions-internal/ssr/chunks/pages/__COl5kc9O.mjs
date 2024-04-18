/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent } from '../astro_Dt0nfyJ_.mjs';
import 'kleur/colors';
import { d as getEntryBySlug, g as getCollection, c as $$BaseLayout, a as $$Section, b as $$Container, e as $$Heading, t as timeAgo, f as getImageDetails, $ as $$Picture, h as formatDate } from './__CJVIvjxO.mjs';
import 'clsx';
/* empty css                           */

const $$Astro$7 = createAstro("https://eriksolsen.com");
const $$Split = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Split;
  const { size = "base", float = false, reverse = false, border = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grid grid-cols-1 md:grid-cols-12 gap-12"], "class:list")}> <div${addAttribute([
    float && `md:sticky md:top-40`,
    size == "small" && `md:col-span-3`,
    size == "base" && `md:col-span-4`,
    size == "large" && `md:col-span-6`,
    border && `border-y md:border-b-0 border-neutral-800 pt-12`,
    "pb-12 md:pb-0 h-full"
  ], "class:list")}> ${renderSlot($$result, $$slots["heading"])} </div> <div${addAttribute([size == "small" && "md:col-span-9", size == "base" && `md:col-span-8`, size == "large" && `md:col-span-6`, `row-span-2`, reverse && `order-first`], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/content/Split.astro", void 0);

const $$Astro$6 = createAstro("https://eriksolsen.com");
const $$Primary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Primary;
  const { slug, category = "blogs", basePath = "blog" } = Astro2.props;
  const post = await getEntryBySlug(category, slug);
  return renderTemplate`${maybeRenderHead()}<div> <a class="group space-y-1"${addAttribute(`/${basePath}/${post.slug}`, "href")}${addAttribute(post.data.title, "title")}> <p class="text-base text-pretty font-medium text-neutral-800 underline"> ${post.data.title} </p> <p class="text-sm text-neutral-600 line-clamp-2"> ${post.data.description} </p> </a> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/blog/related/Primary.astro", void 0);

const $$Astro$5 = createAstro("https://eriksolsen.com");
async function getStaticPaths$1() {
  const posts = await getCollection("blogs");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, {}, { "description": ($$result5) => renderTemplate`${maybeRenderHead()}<div>${entry.data.excerpt}</div>`, "heading": ($$result5) => renderTemplate`<h1>${entry.data.title}</h1>`, "middle": ($$result5) => renderTemplate`<div class="flex flex-row gap-3"> <time class="pill pill-secondary"${addAttribute(entry.data.date, "datetime")}> ${timeAgo(entry.data.date)} </time> <div class="pill pill-primary">${entry.data.category}</div> </div>` })} ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Split", $$Split, { "size": "base", "float": true, "reverse": true }, { "default": ($$result5) => renderTemplate`  <article class="prose prose-lg"> ${renderComponent($$result5, "Content", Content, {})} </article> `, "heading": ($$result5) => renderTemplate`<div class="space-y-20 w-4/5"> ${headings.length > 1 && renderTemplate`<div class="space-y-4"> <div class="h4">Content</div> <ul id="toc" class="space-y-1 text-base text-neutral-600"> ${headings.map((h) => renderTemplate`<li> <a${addAttribute(`#${h.slug}`, "href")}>&ndash; ${h.text}</a> </li>`)} </ul> </div>`} ${entry.data.related && renderTemplate`<div class="space-y-8"> <div class="h4">Related Posts</div> ${entry.data.related.map((r) => renderTemplate`${renderComponent($$result5, "Related", $$Primary, { "slug": r })}`)} </div>`} </div>` })} ` })} ` })} ` })} `;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/blog/[...slug].astro", void 0);

const $$file$1 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/blog/[...slug].astro";
const $$url$1 = "/blog/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://eriksolsen.com");
const $$Figure = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Figure;
  const { src, figureClass, figureText, rounded = true, ...attrs } = Astro2.props;
  const image = await getImageDetails(src);
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(["relative overflow-hidden group gallery hover:cursor-pointer", rounded && `rounded-lg`, figureClass], "class:list")}> ${renderComponent($$result, "Picture", $$Picture, { "src": src, ...attrs })} <figcaption${addAttribute(["absolute bottom-0 left-0 rounded-tr-lg px-3 pt-1 pb-2 text-white bg-white/10 group-hover:bg-white/25 transition-colors", rounded && "rounded-bl-lg"], "class:list")}> ${image ? renderTemplate`<a${addAttribute(`/photography/photo/${image.slug}`, "href")} title="View photo details" class="uppercase text-xs font-medium no-underline"> ${image.data.title} </a>` : renderTemplate`<div class="uppercase text-xs font-normal @[500px]:font-medium no-underline">${figureText}</div>`} </figcaption> </figure>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/Figure.astro", void 0);

const $$Astro$3 = createAstro("https://eriksolsen.com");
const $$Flex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Flex;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row md:flex-wrap gap-4"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/Flex.astro", void 0);

const $$Astro$2 = createAstro("https://eriksolsen.com");
const $$FlexItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FlexItem;
  const { rowHeight = "md:h-[200px] lg:h-[400px]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex-auto", rowHeight], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/FlexItem.astro", void 0);

const $$Astro$1 = createAstro("https://eriksolsen.com");
const $$Prose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Prose;
  const { size = "prose-3xl" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["prose max-w-none", size], "class:list")}> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/content/Prose.astro", void 0);

const $$Astro = createAstro("https://eriksolsen.com");
async function getStaticPaths() {
  const shoots = await getCollection("shoots");
  return shoots.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "footerPadding": true, "navPadding": true, "data-astro-cid-fhmrqrpu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="space-y-16 relative" data-astro-cid-fhmrqrpu> ${renderComponent($$result4, "Heading", $$Heading, { "maxWidth": "max-w-xl", "data-astro-cid-fhmrqrpu": true }, { "description": ($$result5) => renderTemplate`<div data-astro-cid-fhmrqrpu>${entry.data.description}</div>`, "heading": ($$result5) => renderTemplate`<h1 data-astro-cid-fhmrqrpu>${entry.data.title}</h1>` })} ${entry.data.auction && renderTemplate`<dl class="flex gap-8 sm:gap-0 text-gray-900" data-astro-cid-fhmrqrpu> <div class="border-neutral-200 sm:px-8 sm:py-3 sm:border-l" data-astro-cid-fhmrqrpu> <dt class="font-semibold" data-astro-cid-fhmrqrpu>Date</dt> <dd data-astro-cid-fhmrqrpu> <time datetime="2023" data-astro-cid-fhmrqrpu>${formatDate(entry.data.date)}</time> </dd> </div> <div class="border-neutral-200 sm:px-8 sm:py-3 sm:border-l" data-astro-cid-fhmrqrpu> <dt class="font-semibold" data-astro-cid-fhmrqrpu>Auction</dt> <dd data-astro-cid-fhmrqrpu> <a${addAttribute(entry.data.auction.url, "href")} target="_blank" data-astro-cid-fhmrqrpu> ${entry.data.auction.site} </a> </dd> </div> <div class="border-neutral-200 sm:px-8 sm:py-3 sm:border-l" data-astro-cid-fhmrqrpu> <dt class="font-semibold" data-astro-cid-fhmrqrpu>Price</dt> <dd data-astro-cid-fhmrqrpu>$${Intl.NumberFormat().format(entry.data.auction.price)}</dd> </div> </dl>`} </div> ` })} ${entry.data.customLayout ? renderTemplate`<article class="space-y-12" data-astro-cid-fhmrqrpu> ${renderComponent($$result3, "Content", Content, { "data-astro-cid-fhmrqrpu": true })} </article>` : renderTemplate`${renderComponent($$result3, "Container", $$Container, { "size": "large", "data-astro-cid-fhmrqrpu": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Figure", $$Figure, { "src": entry.data.images.hero, "class": "h-full w-full object-cover", "loading": "eager", "figureClass": !entry.body && "mb-4", "sizes": "100vw", "data-astro-cid-fhmrqrpu": true })} ${entry.body && renderTemplate`<div class="my-32" data-astro-cid-fhmrqrpu> ${renderComponent($$result4, "Container", $$Container, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Prose", $$Prose, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Content", Content, { "data-astro-cid-fhmrqrpu": true })} ` })} ` })} </div>`}${renderComponent($$result4, "Flex", $$Flex, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result5) => renderTemplate`${entry.data.images.gallery.map((item, i, row) => renderTemplate`${renderComponent($$result5, "FlexItem", $$FlexItem, { "data-astro-cid-fhmrqrpu": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Figure", $$Figure, { "src": item, "figureClass": "w-full h-full", "class": "w-full h-full object-cover", "sizes": "100vw", "data-astro-cid-fhmrqrpu": true })} ` })}`)}` })} ` })}`}` })} ` })} `;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...slug].astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...slug].astro";
const $$url = "/photography/shoots/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Figure as $, ____slug_$1 as _, $$Split as a, $$Prose as b, $$Flex as c, $$FlexItem as d, ____slug_ as e };
