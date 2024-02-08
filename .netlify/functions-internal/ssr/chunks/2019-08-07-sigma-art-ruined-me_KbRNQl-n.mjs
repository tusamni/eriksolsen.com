import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "sigma-art-ruined-me",
  "tags": ["photography", "sigma", "sony"],
  "category": "Photography",
  "date": "2019-08-07T00:00:00.000Z",
  "featured": "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001",
  "title": "Sigma Art Ruined Me",
  "description": "On a whim I decided to try out a few of Sigma's Art Lenses. Now I have to own one. I'm blown away",
  "excerpt": "While I'm very satisfied with my Sony 24-105 G, I had the opportunity to play around with a set of Sigma Art lenses. Despite the size and weight, I love them. It's a series of lenses that sacrifices everything in the pursuit of image quality.",
  "related": ["last-lens-update-ever", "lens-change-from-3-to-1"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-wow-factor",
    "text": "The Wow Factor"
  }, {
    "depth": 3,
    "slug": "whats-the-harm-you-rented-right",
    "text": "What\u2019s the harm, you rented. Right?"
  }, {
    "depth": 3,
    "slug": "current-setup",
    "text": "Current Setup"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Figure, {
      src: "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "the-wow-factor",
      children: "The Wow Factor"
    }), "\n", createVNode(_components.p, {
      children: "Yep, that\u2019s a click-bait title. I rented three Sigma Art and boy am I glad I did. They\u2019re stunning for car photography. They\u2019ve got next level sharpness and at an f-stop of 1.4 an absolutely beautiful DOF for certain shots."
    }), "\n", createVNode(_components.p, {
      children: "I only have one major complaint with the Art line. They\u2019re so good I had to own one. Scratch that, two issues. They\u2019re amazing but also giant and heavy."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_003.jpg"
    }), "\n", createVNode(_components.h3, {
      id: "whats-the-harm-you-rented-right",
      children: "What\u2019s the harm, you rented. Right?"
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s technically true. I used LensRentals.com (plug for an awesome company) to grab three Sigmas:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "85mm f/1.4 DG HSM Art"
      }), "\n", createVNode(_components.li, {
        children: "50mm f/1.4 DG HSM Art"
      }), "\n", createVNode(_components.li, {
        children: "24mm f/1.4 DG HSM Art"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "From the first shot I was hooked. If you\u2019re solely concerned with image quality, go for the Sigma\u2019s. Outside of the G-Master line there\u2019s not much else that competes. Yes, they\u2019re absolutely huge and heavy. The 85mm is ridiculous in length and weight, and Sigma makes a 135mm!"
    }), "\n", createVNode(_components.p, {
      children: "It was a sad day when I sealed the box to return them back to LensRentals. I couldn\u2019t shake the need for the 50mm. Luckily I was able to work out a deal and got one, no cost to myself."
    }), "\n", createVNode(_components.p, {
      children: "My greatest concern is the sheer size. They\u2019re really not portable at all unless you\u2019re only concerned in taking one lens with you. Seeing as I\u2019m shooting cars most of the time, I need to be mobile. But, I\u2019ll throw caution to the wind and just enjoy the image quailty for the time being."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_011.jpg"
    }), "\n", createVNode(_components.h3, {
      id: "current-setup",
      children: "Current Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony A7iii"
      }), "\n", createVNode(_components.li, {
        children: "Sony 24-105 G f/4"
      }), "\n", createVNode(_components.li, {
        children: "Sigma 50mm f/1.4 DG HSM Art"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blogs/2019-08-07-sigma-art-ruined-me.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2019-08-07-sigma-art-ruined-me.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2019-08-07-sigma-art-ruined-me.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
