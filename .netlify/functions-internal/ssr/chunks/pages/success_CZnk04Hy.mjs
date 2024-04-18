/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_Dt0nfyJ_.mjs';
import 'kleur/colors';
import { b as $$Container, c as $$BaseLayout } from './__CJVIvjxO.mjs';

const $$Astro = createAstro("https://eriksolsen.com");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Thanks - I'm a Digital Marketing Expert and Car Photographer in Austin, TX", "description": "Erik Olsen is the Director of Digital Engagement at ICG America in Austin, TX. He's also an automotive photographer shooting photos at Austin car shows." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto space-y-12"> <h1 class="text-center text-balance">Thanks!</h1> <div class="text-center text-balance text-2xl leading-relaxed">I really appreciate you contacting me. I've received your email and there's a good chance I'm reading it right now.</div> </div> ` })} ` })}`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/contact/success.astro", void 0);

const $$file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/pages/contact/success.astro";
const $$url = "/contact/success";

export { $$Success as default, $$file as file, $$url as url };
