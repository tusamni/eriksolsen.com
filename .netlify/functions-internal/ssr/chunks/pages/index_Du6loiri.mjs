/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_Dt0nfyJ_.mjs';
import 'kleur/colors';
import { t as timeAgo, g as getCollection, a as $$Section, b as $$Container, e as $$Heading, c as $$BaseLayout, i as $$ContactForm, $ as $$Picture } from './__CJVIvjxO.mjs';
import 'clsx';
import { a as $$Split, $ as $$Figure } from './__COl5kc9O.mjs';
import { T as Testimonials } from './faq_CgxDOytP.mjs';

const $$Astro$5 = createAstro("https://eriksolsen.com");
const $$Primary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Primary;
  const { post, snippet = true, metadata = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="@container group relative flex flex-col items-start space-y-2"> <div class="flex flex-col gap-1"> <a${addAttribute(`/blog/${post.slug}`, "href")}${addAttribute(post.data.title, "title")}> <div class="text-2xl font-medium tracking-tight text-balance"> ${post.data.title} </div> <span class="absolute inset-0"></span> </a> ${metadata && renderTemplate`<div class="w-full flex gap-2 items-center text-gray-900"> <time>${timeAgo(post.data.date)}</time> <div>&middot;</div> <div>${post.data.category}</div> </div>`} </div> ${snippet && renderTemplate`<p class="text-base leading-7 text-gray-800 line-clamp-3">${post.data.excerpt}</p>`} </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/blog/cards/Primary.astro", void 0);

const $$Astro$4 = createAstro("https://eriksolsen.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$3;
  const posts = (await getCollection("blogs")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const allYears = [];
  posts.map((p) => allYears.push(p.data.date.getFullYear()));
  const uniqueYears = [...new Set(allYears)];
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Blog - Digital Marketing, Jamstack Programming and Car Photography", "description": "Erik Olsen is the Director of Digital Engagement at ICG America in Austin, TX. He's also an automotive photographer shooting photos at Austin car shows." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, {}, { "heading": ($$result5) => renderTemplate`${maybeRenderHead()}<h1>I write about photography, cars &amp; technology.</h1>` })} ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="space-y-40"> ${uniqueYears.map((y) => renderTemplate`${renderComponent($$result4, "Split", $$Split, { "size": "small", "border": true }, { "default": ($$result5) => renderTemplate`  <div class="grid gap-20 lg:grid-cols-2"> ${posts.map((p) => {
    if (p.data.date.getFullYear() == y) {
      return renderTemplate`${renderComponent($$result5, "Primary", $$Primary, { "post": p })}`;
    }
  })} </div> `, "heading": ($$result5) => renderTemplate`<div class="text-6xl font-light"> ${y} </div>` })}`)} </div> ` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/blog/index.astro", void 0);

const $$file$3 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/blog/index.astro";
const $$url$3 = "/blog";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://eriksolsen.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Contact - I'm a Digital Marketing Expert and Car Photographer in Austin, TX", "description": "Erik Olsen is the Director of Digital Engagement at ICG America in Austin, TX. He's also an automotive photographer shooting photos at Austin car shows.", "footerPadding": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto space-y-12"> <h1 class="text-center text-balance">If you're ready to work together, so am I.</h1> <div class="space-y-8 col-span-3"> ${renderComponent($$result4, "ContactForm", $$ContactForm, { "darkTheme": false })} </div> </div> ` })} ${renderComponent($$result3, "Figure", $$Figure, { "src": "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.jpg", "figureClass": "absolute", "class": "object-cover w-full h-full", "rounded": false })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/contact/index.astro", void 0);

const $$file$2 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/contact/index.astro";
const $$url$2 = "/contact";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://eriksolsen.com");
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { content, darkTheme = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-3 md:space-y-6 flex-row"> <p${addAttribute(["font-medium lg:text-xl text-xl ", darkTheme ? "text-gray-50" : "text-gray-900"], "class:list")}>"${content.text.headline}"</p> <p${addAttribute(["text-base !leading-relaxed", darkTheme ? "text-gray-50" : "text-gray-900"], "class:list")}>${content.text.short}</p> <div class="flex items-center"> <div> ${renderComponent($$result, "Picture", $$Picture, { "class": "inline-block h-9 w-9 rounded-full", "src": content.image, "alt": "" })} </div> <div class="ml-3"> <p${addAttribute(["text-sm font-medium ", darkTheme ? "text-gray-50" : "text-gray-900"], "class:list")}>${content.name}</p> <p${addAttribute(["text-xs font-medium", darkTheme ? "text-gray-300" : "text-gray-500"], "class:list")}>${content.vehicle}</p> </div> </div> </div>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/Testimonial.astro", void 0);

const $$Astro$1 = createAstro("https://eriksolsen.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const links = [
    {
      heading: "Pricing",
      description: "Pricing options tailored to your automotive photography needs.",
      cta: "See Pricing",
      url: "/photography/pricing"
    },
    {
      heading: "FAQ",
      description: "Expert answers to all your car photography inquiries.",
      cta: "Read FAQs",
      url: "/photography/faq"
    },
    {
      heading: "Shoots",
      description: "Browse my recent snapshots captured across Texas.",
      cta: "More Shoots",
      url: "/photography/shoots"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photography in Austin, TX", "description": "During the summer months you'll catch me shooting photos at Cars and Coffee at COTA or Coffee With Cars in Dripping Springs. I also do freelance photography for Bring a Trailer auctions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, {}, { "description": ($$result5) => renderTemplate`${maybeRenderHead()}<div class="space-y-8"> <p>
For the last five years, I've been shooting professional car photography all over central Texas. My passion for automobiles lets me bring out the best in your vehicle. I'll
                        expertly capture every curve resulting in stunning images.
</p> </div>`, "heading": ($$result5) => renderTemplate`<h1>I shoot professional car photography in Austin.</h1>` })} ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-4 md:gap-6"> ${links.map((l) => renderTemplate`<a${addAttribute(l.url, "href")} class="block space-y-3 border border-gray-200 rounded-lg p-6"> <p class="text-gray-900 font-medium lg:text-2xl text-xl">${l.heading}</p> <p class="text-gray-800 text-base sm:text-sm md:text-base tracking-wide text-balance">${l.description}</p> </a>`)} </div> ` })} ${renderComponent($$result3, "Container", $$Container, { "size": "large" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Figure", $$Figure, { "class": "w-full sm:h-[60em] object-cover", "src": "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg" })} ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <section> <div class="grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-10"> ${Testimonials.map((t) => renderTemplate`${renderComponent($$result4, "Testimonial", $$Testimonial, { "content": t })}`)} </div> </section> ` })} ${renderComponent($$result3, "Container", $$Container, { "size": "large" }, { "default": ($$result4) => renderTemplate` <div class="grid lg:grid-cols-2 gap-6"> ${renderComponent($$result4, "Figure", $$Figure, { "figureClass": "col-span-2", "class": "w-full sm:h-svh md:h-[60em] object-cover", "src": "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_005.jpg" })} ${renderComponent($$result4, "Figure", $$Figure, { "class": "w-full h-[10em] md:h-[30em] object-cover", "src": "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_011.jpg" })} ${renderComponent($$result4, "Figure", $$Figure, { "class": "w-full h-[10em] md:h-[30em] object-cover", "src": "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_007.jpg" })} </div> ` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/index.astro", void 0);

const $$file$1 = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/index.astro";
const $$url$1 = "/photography";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://eriksolsen.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photographer in Austin, TX - I Shoot Professional Car Photos for Your Online Auction." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, {}, { "default": ($$result5) => renderTemplate`   ${maybeRenderHead()}<div class="flex gap-2"> <a href="/contact" class="button button-primary w-full sm:w-fit">Hire Me!</a> <a href="/photography/pricing" class="button button-ghost w-full sm:w-fit">See Pricing</a> </div> `, "description": ($$result5) => renderTemplate`<p>
With online car auctions rising in popularity, I've helped clients put their best foot forward with beautiful car photography. Whether it's <i>Bring a Trailer</i>, <i>
Cars & Bids
</i>, <i>Hagerty</i> or <i>eBay</i>, I can help get top dollar for your vehicle auction.
</p>`, "heading": ($$result5) => renderTemplate`<h1>I'm a professional car photographer in Austin.</h1>` })} ` })} ${renderComponent($$result3, "Container", $$Container, { "size": "large" }, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-6 gap-6"> ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_048.jpg", "figureClass": "col-span-6 md:col-span-2", "class": "w-full h-full object-cover", "loading": "eager", "sizes": "(min-width: 768px) 33vw, 100vw" })} ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2022/2022-02-27-lit-show-day-four/lit-show-2022_039.jpg", "figureClass": "col-span-3 md:col-span-2", "class": "w-full h-full object-cover", "loading": "eager", "sizes": "(min-width: 768px) 33vw, 50vw" })} ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_012.jpg", "figureClass": "col-span-3 md:col-span-2", "class": "w-full h-full object-cover", "loading": "eager", "sizes": "(min-width: 768px) 33vw, 100vw" })} ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg", "figureClass": "col-span-6", "class": "w-full h-full object-cover", "sizes": "100vw" })} ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_004.jpg", "figureClass": "col-span-6 md:col-span-3 lg:col-span-2", "class": "w-full h-full object-cover", "loading": "eager", "sizes": "(min-width: 768px) 50vw, (min-width: 1024px) 33vw, 100vw" })} ${renderComponent($$result4, "Figure", $$Figure, { "src": "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_001.jpg", "figureClass": "col-span-6 md:col-span-3 lg:col-span-4", "class": "w-full h-full object-cover object-[30%,50%]", "loading": "eager", "sizes": "(min-width: 768px) 50vw, (min-width: 1024px) 67vw, 100vw" })} </div> ` })} ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/index.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
