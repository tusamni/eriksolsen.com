/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'cssesc';
import { a as $$Container, b as $$Heading, j as getPublicPath, c as $$BaseLayout } from './__eURed7JZ.mjs';
import { T as Testimonials } from './faq_Ul6qjf2E.mjs';

const $$Astro = createAstro("https://eriksolsen.com");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photography in Austin, TX", "description": "During the summer months you'll catch me shooting photos at Cars and Coffee at COTA or Coffee With Cars in Dripping Springs. I also do freelance photography for Bring a Trailer auctions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "description": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="space-y-8"> <p></p> </div>`, "heading": ($$result4) => renderTemplate`<h1>Testimonials</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-3"> ${Testimonials.map((t) => renderTemplate`<div class="p-6 border space-y-4"> <div class="text-lg">${t.text}</div> <div class="flex items-center"> <img${addAttribute(getPublicPath(t.image), "src")} class="rounded-full w-10 h-10 mr-4"> <div> <div class="text-lg font-semibold">${t.name}</div> <div>${t.position}</div> </div> </div> </div>`)} </div> ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/testimonials.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/testimonials.astro";
const $$url = "/photography/testimonials";

export { $$Testimonials as default, $$file as file, $$url as url };
