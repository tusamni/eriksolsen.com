/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, u as unescapeHTML } from '../astro_4pLo1zG6.mjs';
import 'kleur/colors';
import 'cssesc';
import { e as getImageDetails, $ as $$Picture, a as $$Container, b as $$Heading, c as $$BaseLayout } from './__eURed7JZ.mjs';

const Faq = [
  {
    heading: "What should I expect on the shoot?",
    description: "<p>We'll generally try to meet up around sunrise or sunset for the best lighting. A basic photos-only shoot takes around 2 hours, if we're doing video add another hour at a minimum. You're more than welcome to stay with me during the shoot, but it's not required.</p><p>You should ensure the car is very well detailed as any dirt, smudges are likely to show up in the photos. I'll ask you to walk me through any specific details on the car, things you'd like to highlight, etc.</p><p>I'll do my best to deliver the photos and videos within a few business days.</p>"
  },
  {
    heading: "Will you come to my location?",
    description: "<p>Absolutely. I'll traveled all over Texas for shoots. I'm currently located in Austin, but have no problem traveling. Within a reasonable distance, I'll do it at no charge. If it's outside the Austin area, I'll ask for travel expenses.</p>"
  },
  {
    heading: "How much does a photo shoot cost?",
    description: `<p>The short answer: it depends. That said, I'll do my best to work within your set budget. I can build a photoshoot package to meet any needs.</p><p>If you'd like more specific details, check out my <a href="/photography/pricing" title="Car photography pricing" class="underline">car photography pricing.</a></p>`
  },
  {
    heading: "What gear are you using?",
    description: `<p>I've changed gear many times. That said, I'm really pleased with my current setup.</p><ul class="text-lg ml-6"><li>Sony Alpha A7iii</li><li>20-40mm f/2.8 Di III VXD</li><li>35-150mm f/2-2.8 Di III VXD</li></ul><p>If you'd like a more detailed explanation of what equipment I'm using, check out my <a href="/photography/gear" title="Car photography gear" class="underline">car photography gear</a> write-up.</p>`
  }
];
const Testimonials = [
  {
    text: "Erik is now our sole photographer for all of our vehicles going up for auction. He was able to capture everything the Jaguar E-type had to offer.",
    name: "Chris G",
    position: "MFE Enterprises",
    image: "/testimonials/chris-glosson.jpg"
  }
];
const Pricing = [
  {
    title: "Base",
    description: "A great option for an online auction listing.",
    pricing: "$399",
    items: ["Full set of detailed photos (120 photos)", "Professional editing within 5 business days"]
  },
  {
    title: "Premium",
    description: "Step it up with a highly detailed set of photos.",
    pricing: "$599",
    items: ["Suite of detailed photos (200 photos)", "Professional editing witin 3 business days", "Travel included"]
  },
  {
    title: "Full",
    description: "Complete package for your online auction or car sale, photos and videos included.",
    pricing: "$799",
    items: ["Full premium photo set", "Three videos (driving, walk around, cold start)", "Professional editing witin 3 business days", "Travel included"]
  }
];
const auctionSites = ["bring-a-trailer", "cars-and-bids", "ebay", "hagerty", "hemmings", "zero-260"];

const $$Astro$1 = createAstro("https://eriksolsen.com");
const $$Figure = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Figure;
  const { src, figureClass, figureText, ...attrs } = Astro2.props;
  const image = await getImageDetails(src);
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(["relative overflow-hidden group gallery hover:cursor-pointer", figureClass], "class:list")}> ${renderComponent($$result, "Picture", $$Picture, { "src": src, ...attrs })} <figcaption class="absolute bottom-0 left-0 rounded-tr-sm bg-white pl-3 pr-4 py-3"> ${image ? renderTemplate`<a${addAttribute(`/photography/photo/${image.slug}`, "href")} title="View photo details" class="uppercase text-sm font-medium no-underline flex flex-row gap-2 items-center hover:underline"> ${image.data.title} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3"> <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path> <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path> </svg> </a>` : renderTemplate`<div class="uppercase text-sm font-medium no-underline">${figureText}</div>`} </figcaption> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute bottom-3 group-hover:right-3 -right-72 text-white transition-all duration-200 pointer-events-none"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path> </svg> </figure>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/image/Figure.astro", void 0);

const $$Astro = createAstro("https://eriksolsen.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photography in Austin, TX", "description": "During the summer months you'll catch me shooting photos at Cars and Coffee at COTA or Coffee With Cars in Dripping Springs. I also do freelance photography for Bring a Trailer auctions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading": ($$result4) => renderTemplate`${maybeRenderHead()}<h1>Car Photography FAQ</h1>` })} ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-2 gap-12"> <div class="col-span-2 lg:col-span-1"> ${renderComponent($$result3, "Figure", $$Figure, { "src": "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_009.jpg", "class": "object-cover w-full h-72 lg:h-full" })} </div> <div${addAttribute(`{ selected: 0 }`, "x-data")} class="space-y-12"> ${Faq.map((f, i) => renderTemplate`<div class="space-y-6"> <div${addAttribute(`selected !== ${i} ? selected = ${i} : selected = null`, "x-on:click")} class="flex justify-between items-center hover:cursor-pointer"> <div class="h4">${f.heading}</div> <svg${addAttribute(`selected !== ${i}`, "x-show")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path> </svg> <svg${addAttribute(`selected == ${i}`, "x-show")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path> </svg> </div> <div${addAttribute(`container${i}`, "x-ref")}${addAttribute(`selected == ${i} ? 'max-height: ' + $refs.container${i}.scrollHeight + 'px' : ''`, "x-bind:style")} class="text-neutral-800 text-xl leading-8 overflow-hidden max-h-0 transition-all duration-300 space-y-6">${unescapeHTML(f.description)}</div> </div>`)} </div> </div> ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/faq.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/faq.astro";
const $$url = "/photography/faq";

const faq = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Figure as $, Pricing as P, Testimonials as T, auctionSites as a, faq as f };
