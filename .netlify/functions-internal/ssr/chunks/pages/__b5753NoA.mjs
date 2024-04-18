/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_Dt0nfyJ_.mjs';
import 'kleur/colors';
import { $ as $$Picture, t as timeAgo, g as getCollection, a as $$Section, b as $$Container, c as $$BaseLayout } from './__CJVIvjxO.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://eriksolsen.com");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full sm:w-fit flex flex-row gap-4 justify-between items-center"> ${page.currentPage == 1 ? renderTemplate`<div class="button button-disabled flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg>
Previous
</div>` : renderTemplate`<a${addAttribute(page.url.prev, "href")} class="button button-primary flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg>
Previous
</a>`} ${page.currentPage == page.lastPage ? renderTemplate`<div class="button button-disabled flex items-center">Next</div>` : renderTemplate`<a${addAttribute(page.url.next, "href")} class="button button-primary flex items-center">
Next
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> </svg> </a>`} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/shoots/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://eriksolsen.com");
const $$Primary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Primary;
  const { shoot, description = false, sizes = "100vw" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/photography/shoots/${shoot.slug}`, "href")} class="@container group space-y-6"> <div class="rounded-lg w-full h-72 overflow-hidden relative"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 absolute bottom-4 group-hover:right-4 -right-72 text-gray-50 transition-all duration-200 pointer-events-none z-20"> <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd"></path> </svg> <div class="bg-gradient-to-br from-transparent via-gray-900/10 to-gray-900/50 opacity-0 group-hover:opacity-100 w-full h-full absolute z-10 transition-opacity duration-300"></div> ${renderComponent($$result, "Picture", $$Picture, { "src": shoot.data.images.hero, "class": "w-full h-full object-cover transition duration-300", "sizes": sizes })} </div> <div class="flex flex-col space-y-4"> <div class="space-y-1 flex justify-center items-center flex-col"> <div class="@xs:text-2xl tracking-tight line-clamp-1 font-medium text-gray-900">${shoot.data.title}</div> <div class="flex gap-2 items-center text-base text-gray-800"> <time>${timeAgo(shoot.data.date)}</time> <div>&middot;</div> <div>${shoot.data.images.gallery.length} photos</div> </div> </div> ${description && renderTemplate`<p class="text-gray-900 text-lg lg:@sm:text-lg lg:@lg:text-xl transition-all duration-300 line-clamp-2">${shoot.data.description}</p>`} </div> </a>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/shoots/cards/Primary.astro", void 0);

const $$Astro = createAstro("https://eriksolsen.com");
async function getStaticPaths({ paginate }) {
  const allShoots = (await getCollection("shoots")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return paginate(allShoots, { pageSize: 12 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "size": "large" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div> <div class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16" id="shoots"> ${page.data.map((s, i) => renderTemplate`${renderComponent($$result4, "Primary", $$Primary, { "shoot": s, "sizes": "(min-width: 768px) 50vw, (max-width: 1024px) 33vw, 100vw", "loading": i == 0 ? `eager` : `lazy` })}`)} </div> </div> </div> ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="flex justify-between items-center"> <div class="hidden sm:block text-sm">Page ${page.currentPage} of ${page.lastPage}</div> ${renderComponent($$result4, "Pagination", $$Pagination, { "page": page })} </div> ` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...page].astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/shoots/[...page].astro";
const $$url = "/photography/shoots/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
