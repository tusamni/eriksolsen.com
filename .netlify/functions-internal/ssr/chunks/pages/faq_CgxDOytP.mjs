/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_Dt0nfyJ_.mjs';
import 'kleur/colors';
import { a as $$Section, b as $$Container, e as $$Heading, c as $$BaseLayout } from './__CJVIvjxO.mjs';
import { $ as $$Figure } from './__COl5kc9O.mjs';

const Faq = [
  {
    category: "general",
    questions: [
      {
        title: "What should I expect on the shoot?",
        description: "<p>We'll generally try to meet up around sunrise or sunset for the best lighting. A basic photos-only shoot takes around 2 hours, if we're doing video add another hour at a minimum. You're more than welcome to stay with me during the shoot, but it's not required.</p><p>You should ensure the car is very well detailed as any dirt, smudges are likely to show up in the photos. I'll ask you to walk me through any specific details on the car, things you'd like to highlight, etc.</p>"
      },
      {
        title: "Will you come to my location?",
        description: "<p>Absolutely. I'll traveled all over Texas for shoots. I'm currently located in Austin, but have no problem traveling. Within a reasonable distance, I'll do it at no charge. If it's outside the Austin area, I'll ask for travel expenses.</p>"
      },
      {
        title: "How much does a shoot cost?",
        description: `<p>The short answer: it depends. That said, I'll do my best to work within your set budget. I can build a photoshoot package to meet any needs.</p><p>If you'd like more specific details, check out my <a href="/photography/pricing" title="Car photography pricing" class="underline">car photography pricing.</a></p>`
      }
    ]
  },
  {
    category: "photography",
    questions: [
      {
        title: "What photography gear are you using?",
        description: `<p>I've been through a LOT of gear over the years. However, I keep coming back to my Zeiss Batis lenses. They're consistent, beautiful and lightweight.</p><ul class="text-base ml-6 space-y-1"><li>Sony Alpha A7 III</li><li>Zeiss Batis 18mm</li><li>Zeiss Batis 40mm</li><li>Zeiss Batis 85mm</li><li>Zeiss Batis 135mm</li></ul>`
      }
    ]
  },
  {
    category: "videography",
    questions: [
      {
        title: "Do you shoot video as well?",
        description: `<p>Absolutely! For most online listings I'd recommend a walk-around video, cold-start and a driving video. If you've got something else in mind, let's talk!</p>`
      },
      {
        title: "What videography gear are you using?",
        description: `<p>I'm a DJI fan right now. They've got great cameras and stabilization.</p><ul class="text-base ml-6 space-y-1"><li>DJI Pocket 3</li><li>DJI Action 3</li><li>DJI Mini 3 Pro drone</li><li>Tentacle Track E recorder</li><li>Countryman B3 microphone</li><li>iFootage mounting</li></ul>`
      }
    ]
  }
];
const Testimonials = [
  {
    text: {
      headline: "Our Sole Photographer",
      short: "Erik is now our sole photographer for all vehicles going up for auction. He was able to capture everything the Jaguar E-type had to offer.",
      long: "Erik is now our sole photographer for all vehicles going up for auction. He was able to capture everything the Jaguar E-type had to offer."
    },
    name: "Chris G",
    vehicle: "1969 Jaguar XKE Series II",
    image: "/testimonials/chris-g.jpg"
  },
  {
    text: {
      headline: "Went Above and Beyond",
      short: "Hiring Erik positioned me to sell my vehicle at top dollar compared to the market average; I highly recommend him!",
      long: "Erik's professionalism and expertise were on display from our first interaction onward. He was responsive and flexible while we planned the photo shoot. When it came time to shoot, Erik followed the shot list closely and went above and beyond with additional photos of my vehicle. After shooting, Erik promptly made the necessary edits and shared the photos. Hiring Erik positioned me to sell my vehicle at top dollar compared to the market average; I highly recommend him!"
    },
    name: "Connor C.",
    vehicle: "2000 Toyota 4Runner",
    image: "/testimonials/connor-c.jpg"
  },
  {
    text: {
      headline: "All I Could Have Wanted",
      short: "Erik is very friendly, punctual, and made the outdoors photo session very enjoyable. The photography results were all I could have wanted.",
      long: "Recently I listed my 1970 Porsche 911T on Hagerty. Upon meeting Erik I was pleased to find an easy to deal with gentleman with an open attitude towards what I was wanting to achieve from the photography of my 911T.  Erik is very friendly, punctual, and made the outdoors photo session very enjoyable. The photography results were all I could have wanted. Erik chose the proper time of day to shoot, positioned my 911T to get the correct depth of field, and I credit Erik with helping me sell my car at full reserve."
    },
    name: "Frank B.",
    vehicle: "1970 Porsche 911T",
    image: "/testimonials/frank-b.jpg"
  }
];
const PhotographyPricing = [
  {
    title: "Base",
    description: "A great option for an online auction or for-sale listing.",
    pricing: "$399",
    items: [
      {
        title: "Full set of photos",
        tooltip: "Includes 100 photos of every aspect of the exterior and interior of the vehicle."
      },
      {
        title: "Professional editing",
        tooltip: "All photos edited using Adobe Lightroom to correct for proper paint color, removal of unnecessary objects, etc."
      },
      {
        title: "Delivery within 5 business days",
        tooltip: "Delivery of all edited photos, sized to proper specifications based on your auction or sale platform."
      }
    ],
    cta: "Get Started"
  },
  {
    title: "Premium",
    description: "Step it up with a highly detailed set of photos.",
    pricing: "$599",
    items: [
      {
        title: "Suite of detailed photos",
        tooltip: "Includes 200 highly detailed photos of every inch of the exterior and interior of the vehicle. If access to a lift is available, undercarrige included as well."
      },
      {
        title: "Professional editing",
        tooltip: "All photos edited using Adobe Lightroom to correct for proper paint color, removal of unnecessary objects, etc."
      },
      {
        title: "Delivery within 3 business days",
        tooltip: "Delivery of all edited photos, sized to proper specifications based on your auction or sale platform."
      }
    ],
    cta: "Get Started"
  },
  {
    title: "Custom",
    description: "Looking for something a bit different? Let's chat.",
    pricing: "Quote",
    items: [{ title: "Custom composite images" }, { title: "Remote locations" }, { title: "Large collections" }],
    cta: "Get Quote"
  }
];
const VideoPricing = {
  title: "Add a Video Package",
  description: "Enhance your online for sale listing or auction with a trio of videos to show off your vehicle.",
  pricing: "$299",
  items: [
    {
      title: "Cold start video",
      tooltip: "Two cameras filming the exhaust and engine bay while you cold start the vehicle."
    },
    {
      title: "Walk around video",
      tooltip: "A short video showing all exterior and interior angles filmed with a stabilized camera."
    },
    {
      title: "Driving video",
      tooltip: "I'll hook up a couple of action cameras and high SPL microphones at the intake and exhaust to capture professional video and audio."
    }
  ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://eriksolsen.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n    function updateSubject(val) {\n        document.getElementById("output-email-subject").value = `New Question from eriksolsen.com - ${val}`;\n    }\n<\/script>'], ["", ' <script>\n    function updateSubject(val) {\n        document.getElementById("output-email-subject").value = \\`New Question from eriksolsen.com - \\${val}\\`;\n    }\n<\/script>'])), renderComponent($$result, "Layout", $$BaseLayout, { "title": "Car Photography in Austin, TX", "description": "During the summer months you'll catch me shooting photos at Cars and Coffee at COTA or Coffee With Cars in Dripping Springs. I also do freelance photography for Bring a Trailer auctions.", "footerPadding": false, "itemscope": true, "itemtype": "https://schema.org/FAQPage" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, {}, { "description": ($$result5) => renderTemplate`${maybeRenderHead()}<div>
You've got questions and hopefully I've got some answers. If you don't find an answer to your question, why not <a href="/contact" class="underline decoration-1 underline-offset-2">
contact me
</a>?
</div>`, "heading": ($$result5) => renderTemplate`<h1>Car photography questions</h1>` })} ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="space-y-12 max-w-2xl"> ${Faq.map((f) => renderTemplate`<div> <div class="pill pill-primary capitalize">${f.category}</div> <div class="divide-y"> ${f.questions.map((q) => renderTemplate`<details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"> <summary itemprop="name" class="hover:cursor-pointer text-gray-900 text-lg sm:text-2xl font-medium tracking-tight focus:text-gray-800 py-6 text-left"> ${q.title} </summary> <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="ml-4 sm:ml-6 text-gray-800 text-base sm:text-lg pb-6"> <div itemprop="text" class="space-y-6">${unescapeHTML(q.description)}</div> </div> </details>`)} </div> </div>`)} </div> ` })} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="space-y-6"> <h2 class="h3">Ask a question!</h2> <form class="grid grid-cols-6 gap-4 items-end" action="/contact/success/" id="contact-form" name="Contact - FAQ" method="POST" data-netlify="true" netlify-honeypot="name"> <div class="hidden space-y-2 col-span-6 sm:col-span-2 lg:col-span-3"> <label for="name">Name</label> <input type="text" autocomplete="name" name="name" id="name"> </div> <div class="space-y-2 col-span-6 sm:col-span-2 lg:col-span-3"> <label for="question">Question</label> <input type="text" autocomplete="off" name="question" id="question" required> </div> <div class="space-y-2 col-span-6 sm:col-span-2 lg:col-span-2"> <label for="email">E-mail</label> <input type="email" autocomplete="email" name="email" id="email" required oninput="updateSubject(this.value)"> </div> <input id="output-email-subject" type="hidden" name="subject" value=""> <div class="col-span-6 sm:col-span-2 lg:col-span-1 mt-4 md:mt-0"> <button class="button-primary button text-base w-full">Ask Away!</button> </div> </form> </div> ` })} ${renderComponent($$result3, "Figure", $$Figure, { "src": "shoots/2020/2020-02-27-lit-show-day-one/lit-show-2020_017.jpg", "figureClass": "absolute", "class": "object-cover w-full h-full", "rounded": false })} ` })} ` }));
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/faq.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/photography/faq.astro";
const $$url = "/photography/faq";

const faq = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { PhotographyPricing as P, Testimonials as T, VideoPricing as V, faq as f };
