/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'cssesc';
import { d as getEntryBySlug, g as getCollection, c as $$BaseLayout, a as $$Container, b as $$Heading, t as timeAgo, $ as $$Picture } from './__eURed7JZ.mjs';
import 'clsx';
import { $ as $$Split } from './__dr360VEN.mjs';

const $$Astro$2 = createAstro("https://eriksolsen.com");
const $$Related = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Related;
  const { slug, category = "blogs", basePath = "blog" } = Astro2.props;
  const post = await getEntryBySlug(category, slug);
  return renderTemplate`${maybeRenderHead()}<div> <a class="group space-y-1"${addAttribute(`/${basePath}/${post.slug}`, "href")}${addAttribute(post.data.title, "title")}> <p class="text-base font-medium text-neutral-800 underline"> ${post.data.title} </p> <p class="text-sm text-neutral-600 line-clamp-2"> ${post.data.description} </p> </a> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/sidebar/Related.astro", void 0);

const $$Astro$1 = createAstro("https://eriksolsen.com");
async function getStaticPaths$1() {
  const posts = await getCollection("blogs");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "description": ($$result4) => renderTemplate`${maybeRenderHead()}<div>${entry.data.excerpt}</div>`, "heading": ($$result4) => renderTemplate`<h1>${entry.data.title}</h1>`, "middle": ($$result4) => renderTemplate`<div class="flex flex-row gap-3"> <time class="pill pill-secondary"${addAttribute(entry.data.date, "datetime")}> ${timeAgo(entry.data.date)} </time> <div class="pill pill-secondary">${entry.data.category}</div> </div>` })} ` })} ${renderComponent($$result2, "Container", $$Container, { "padBottom": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Split", $$Split, { "size": "base", "float": true, "reverse": true }, { "default": ($$result4) => renderTemplate`  <article class="prose prose-xl md:prose-2xl prose-neutral"> ${renderComponent($$result4, "Content", Content, {})} </article> `, "heading": ($$result4) => renderTemplate`<div class="space-y-20 w-4/5"> ${headings.length > 1 && renderTemplate`<div class="space-y-4"> <div class="h4">Content</div> <ul class="space-y-1 text-base text-neutral-600"> ${headings.map((h) => renderTemplate`<li> <a${addAttribute(`#${h.slug}`, "href")}>&ndash; ${h.text}</a> </li>`)} </ul> </div>`} ${entry.data.related && renderTemplate`<div class="space-y-8"> <div class="h4">Related Posts</div> ${entry.data.related.map((r) => renderTemplate`${renderComponent($$result4, "Related", $$Related, { "slug": r })}`)} </div>`} </div>` })} ` })} ` })}`;
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
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "classes": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Picture", $$Picture, { "src": entry.data.hero, "class": "h-[50vh] object-cover w-full" })} ${maybeRenderHead()}<div class="md:-mt-48"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="md:bg-white pt-12 md:p-12 space-y-24"> ${renderComponent($$result3, "Heading", $$Heading, { "topMargin": false, "headingWidth": "w-auto md:max-w-[60ch]", "descriptionWidth": "w-auto md:max-w-[45ch]" }, { "description": ($$result4) => renderTemplate`<div>${entry.data.description}</div>`, "heading": ($$result4) => renderTemplate`<h1>${entry.data.title}</h1>`, "middle": ($$result4) => renderTemplate`<div class="flex flex-row gap-3"> <time class="pill pill-secondary"${addAttribute(entry.data.date, "datetime")}> ${timeAgo(entry.data.date)} </time> <div class="pill pill-secondary">${entry.data.category}</div> </div>` })} <!-- {
                    entry.data.auction && (
                        <div class="flex flex-col gap-1">
                            <div class="text-xl font-semibold">Auction</div>
                            <ul class="space-y-1">
                                <li>{\`\${entry.data.auction.sold ? \`Sold for \` : \`Bid to \`} $\${entry.data.auction.price.toLocaleString("en-US")}\`}</li>
                                <li>
                                    <a href={entry.data.auction.url} class="underline underline-offset-1">
                                        {entry.data.auction.site}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                } --> <article class="prose prose-2xl max-w-none"> ${renderComponent($$result3, "Content", Content, {})} </article> </div>  ` })} </div> ` })} ${renderComponent($$result, "Container", $$Container, {})}`;
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

export { ____slug_$1 as _, ____slug_ as a };
