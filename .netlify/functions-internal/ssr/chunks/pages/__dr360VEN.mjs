/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent } from '../astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { g as getCollection, $ as $$Picture, t as timeAgo, a as $$Container, b as $$Heading, c as $$BaseLayout } from './__eURed7JZ.mjs';

const $$Astro$6 = createAstro("https://eriksolsen.com");
const $$Split = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Split;
  const { size = "base", float = false, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grid grid-cols-1 md:grid-cols-12 gap-12"], "class:list")}> <div${addAttribute([float && `md:sticky md:top-32`, size == "small" && `md:col-span-3`, size == "base" && `md:col-span-4`, size == "large" && `md:col-span-6`, "border-y md:border-b-0 border-neutral-800 pt-12 pb-12 md:pb-0"], "class:list")}> ${renderSlot($$result, $$slots["heading"])} </div> <div${addAttribute([size == "small" && "md:col-span-9", size == "base" && `md:col-span-8`, size == "large" && `md:col-span-6`, `row-span-2`, reverse && `order-first`], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/content/Split.astro", void 0);

// get the public image url
function stringToSlug(path) {
    return path
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function slugToString(path) {
    return path.replaceAll("-", " ");
}

const $$Astro$5 = createAstro("https://eriksolsen.com");
const $$Filters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Filters;
  const shoots = await getCollection("shoots");
  const allManufacturers = [];
  shoots.map((s) => {
    if (s.data.brand) {
      allManufacturers.push(s.data.brand);
    }
  });
  const uniqueManufacturers = [...new Set(allManufacturers)];
  const allCategories = [];
  shoots.map((s) => allCategories.push(s.data.category));
  const uniqueCategories = [...new Set(allCategories)];
  return renderTemplate`${maybeRenderHead()}<h3>Shoot Filters</h3> <div class="grid sm:grid-cols-2 md:grid-cols-1 gap-8"> <div class="space-y-2"> <p class="font-semibold text-xl">Categories</p> <ul> ${uniqueCategories.map((c) => renderTemplate`<li> <a${addAttribute(`/photography/shoots//${stringToSlug(
    c
  )}`, "href")} class="text-lg underline"> ${c} </a> </li>`)} </ul> </div> <div class="space-y-2"> <p class="font-semibold text-xl">Manufacturer</p> <ul> ${uniqueManufacturers.map((m) => renderTemplate`<li> <a${addAttribute(`/photography/shoots/${stringToSlug(
    m
  )}`, "href")} class="text-lg underline"> ${m} </a> </li>`)} </ul> </div> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/shoots/Filters.astro", void 0);

const $$Astro$4 = createAstro("https://eriksolsen.com");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full sm:w-fit flex flex-row gap-4 justify-between items-center"> ${page.currentPage == 1 ? renderTemplate`<div class="button button-disabled flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg>
Previous
</div>` : renderTemplate`<a${addAttribute(page.url.prev, "href")} class="button button-primary flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg>
Previous
</a>`} ${page.currentPage == page.lastPage ? renderTemplate`<div class="button button-disabled flex items-center">Next</div>` : renderTemplate`<a${addAttribute(page.url.next, "href")} class="button button-primary flex items-center">
Next
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> </svg> </a>`} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/Pagination.astro", void 0);

const $$Astro$3 = createAstro("https://eriksolsen.com");
const $$Primary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Primary;
  const { shoot, sizes = "100vw" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/photography/shoots/${shoot.slug}`, "href")} class="@container group overflow-hidden grid"> ${renderComponent($$result, "Picture", $$Picture, { "src": shoot.data.hero, "class": "w-full h-72 object-cover", "sizes": sizes })} <div class="flex flex-col pt-6 space-y-4"> <div class="space-y-1"> <div class="@xs:text-2xl tracking-tight line-clamp-1 font-semibold">${shoot.data.title}</div> <div class="hidden md:flex gap-2 items-center text-base text-neutral-500"> <time>${timeAgo(shoot.data.date)}</time> <div>&middot;</div> <div>${shoot.data.gallery.length} photos</div> </div> </div> <p class="text-neutral-800 text-lg lg:@sm:text-lg lg:@lg:text-xl transition-all duration-300 line-clamp-2"> ${shoot.data.description} </p> </div> </a>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/shoots/cards/Primary.astro", void 0);

const $$Astro$2 = createAstro("https://eriksolsen.com");
async function getStaticPaths$2({ paginate }) {
  const allShoots = (await getCollection("shoots")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const allCategories = [];
  allShoots.map((s) => allCategories.push(stringToSlug(s.data.category)));
  const uniqueCategories = [...new Set(allCategories)];
  return uniqueCategories.flatMap((category) => {
    const filteredShoots = allShoots.filter((shoot) => stringToSlug(shoot.data.category).includes(category));
    return paginate(filteredShoots, {
      params: { category },
      props: { category },
      pageSize: 6
    });
  });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const { page, category } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading": ($$result4) => renderTemplate`${maybeRenderHead()}<h1 class="capitalize">${slugToString(category)}<br>Photoshoots</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Split", $$Split, { "size": "small", "float": true, "reverse": true }, { "default": ($$result4) => renderTemplate`  <div> <div id="top"></div> <div class="space-y-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="shoots"> ${page.data.map((s, i) => renderTemplate`${renderComponent($$result4, "Primary", $$Primary, { "shoot": s, "sizes": "(min-width: 768px) 80vw, (min-width: 1024px) 50vw, (min-width: 1280px) 450px, 100vw", "loading": i == 0 ? `eager` : `lazy` })}`)} </div> <div class="flex justify-between items-center"> <div class="hidden sm:block text-sm">Page ${page.currentPage} of ${page.lastPage}</div> ${renderComponent($$result4, "Pagination", $$Pagination, { "page": page })} </div> </div> </div> `, "heading": ($$result4) => renderTemplate`<div class="space-y-8"> ${renderComponent($$result4, "Filters", $$Filters, {})} </div>` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[category]/[...page].astro", void 0);

const $$file$2 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[category]/[...page].astro";
const $$url$2 = "/photography/shoots/[category]/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$2,
    file: $$file$2,
    getStaticPaths: getStaticPaths$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://eriksolsen.com");
async function getStaticPaths$1({ paginate }) {
  const allShoots = (await getCollection("shoots", ({ data }) => {
    return data.brand;
  })).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const allManufacturers = [];
  allShoots.map((s) => {
    if (s.data.brand) {
      allManufacturers.push(stringToSlug(s.data.brand));
    }
  });
  const uniqueManufacturers = [...new Set(allManufacturers)];
  return uniqueManufacturers.flatMap((manufacturer) => {
    const filteredShoots = allShoots.filter(
      (shoot) => stringToSlug(shoot.data.brand).includes(manufacturer)
    );
    return paginate(filteredShoots, {
      params: { manufacturer },
      props: { manufacturer },
      pageSize: 6
    });
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { page, manufacturer } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading": ($$result4) => renderTemplate`${maybeRenderHead()}<h1 class="capitalize"> ${slugToString(manufacturer)}<br>Photoshoots
</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Split", $$Split, { "size": "small", "float": true, "reverse": true }, { "default": ($$result4) => renderTemplate`  <div> <div id="top"></div> <div class="space-y-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="shoots"> ${page.data.map((s, i) => renderTemplate`${renderComponent($$result4, "Primary", $$Primary, { "shoot": s, "sizes": "(min-width: 768px) 80vw, (min-width: 1024px) 50vw, (min-width: 1280px) 450px, 100vw", "loading": i == 0 ? `eager` : `lazy` })}`)} </div> <div class="flex justify-between items-center"> <div class="hidden sm:block text-sm">Page ${page.currentPage} of ${page.lastPage}</div> ${renderComponent($$result4, "Pagination", $$Pagination, { "page": page })} </div> </div> </div> `, "heading": ($$result4) => renderTemplate`<div class="space-y-8"> ${renderComponent($$result4, "Filters", $$Filters, {})} </div>` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[manufacturer]/[...page].astro", void 0);

const $$file$1 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[manufacturer]/[...page].astro";
const $$url$1 = "/photography/shoots/[manufacturer]/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://eriksolsen.com");
async function getStaticPaths({ paginate }) {
  const allShoots = (await getCollection("shoots")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return paginate(allShoots, { pageSize: 6 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading": ($$result4) => renderTemplate`${maybeRenderHead()}<h1>Automotive Photoshoots</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Split", $$Split, { "size": "small", "float": true, "reverse": true }, { "default": ($$result4) => renderTemplate`  <div> <div id="top"></div> <div class="space-y-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="shoots"> ${page.data.map((s, i) => renderTemplate`${renderComponent($$result4, "Primary", $$Primary, { "shoot": s, "sizes": "(min-width: 768px) 80vw, (min-width: 1024px) 50vw, (min-width: 1280px) 450px, 100vw", "loading": i == 0 ? `eager` : `lazy` })}`)} </div> <div class="flex justify-between items-center"> <div class="hidden sm:block text-sm">Page ${page.currentPage} of ${page.lastPage}</div> ${renderComponent($$result4, "Pagination", $$Pagination, { "page": page })} </div> </div> </div> `, "heading": ($$result4) => renderTemplate`<div class="space-y-8"> ${renderComponent($$result4, "Filters", $$Filters, {})} </div>` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...page].astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...page].astro";
const $$url = "/photography/shoots/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Split as $, ____page_$2 as _, ____page_$1 as a, ____page_ as b };
