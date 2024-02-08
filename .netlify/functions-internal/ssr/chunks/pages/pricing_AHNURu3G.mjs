/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$Container, b as $$Heading, c as $$BaseLayout } from './__eURed7JZ.mjs';
import { P as Pricing } from './faq_Ul6qjf2E.mjs';

const $$Astro = createAstro("https://eriksolsen.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photography in Austin, TX", "description": "During the summer months you'll catch me shooting photos at Cars and Coffee at COTA or Coffee With Cars in Dripping Springs. I also do freelance photography for Bring a Trailer auctions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading": ($$result4) => renderTemplate`${maybeRenderHead()}<h1>Photography Pricing</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="lg:grid lg:grid-cols-3 gap-6 xl:gap-8 lg:space-y-0"> ${Pricing.map(
    (p) => renderTemplate`<div class="p-6 xl:p-8 border space-y-6 flex flex-col justify-between"> <div class="space-y-6"> <div class="space-y-2"> <div class="text-3xl font-semibold">${p.title}</div> <p class="text-neutral-500 sm:text-lg">${p.description}</p> </div> <div class="text-5xl font-extrabold tracking-tighter">${p.pricing}</div> <ul role="list" class="mb-8 space-y-4 text-left"> ${p.items.map(
      (i) => renderTemplate`<li class="flex items-center space-x-3"> <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>${i}</span> </li>`
    )} </ul> </div> <a href="/contact" class="button button-primary">Get started</a> </div>`
  )} </div> ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/pricing.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/pricing.astro";
const $$url = "/photography/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
