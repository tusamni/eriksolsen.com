import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "last-lens-update-ever",
  "tags": ["photography", "zeiss", "batis", "sony"],
  "category": "Photography",
  "date": "2020-01-27T00:00:00.000Z",
  "featured": "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007",
  "title": "My Last Lens Update, Ever. No, Seriously.",
  "description": "2 camera bodies and 11 lenses later, I've finally settled on a complete setup. I'm going full Batis",
  "excerpt": "In the last three years I've been through three camera bodies, eleven different lenses (some twice!), and a host of camera accessories. I think it's time to settle down with a set of quality lenses and be content.",
  "related": ["sigma-art-ruined-me", "lens-change-from-3-to-1"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "back-to-batis",
    "text": "Back to Batis"
  }, {
    "depth": 2,
    "slug": "size-matters",
    "text": "Size Matters"
  }, {
    "depth": 2,
    "slug": "the-finale",
    "text": "The Finale"
  }, {
    "depth": 3,
    "slug": "final-setup",
    "text": "Final Setup"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Figure, {
      src: "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_016.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "back-to-batis",
      children: "Back to Batis"
    }), "\n", createVNode(_components.p, {
      children: "There\u2019s a common saying in the photography world, \u201CMarry your lenses, date your camera\u201D. That\u2019s a great piece of advice I could have used a long time ago, but I\u2019m hoping that I\u2019ve finally settled for the best, all-around lens setup for my style of photography."
    }), "\n", createVNode(_components.p, {
      children: ["Over the last three years I\u2019ve had two bodies, but owned eleven different lenses. I\u2019ve even owned some of them twice, I\u2019m not a smart man. So allow me to impart some wisdom on anyone reading this. ", createVNode(_components.strong, {
        children: "Rent your lenses!"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Luckily for me, my lenses held their value pretty well, so I didn\u2019t spend a fortune trying to figure out what I liked. But it 100% would have been cheaper for me to rent the few times a year I was doing large shoots to figure out what I liked."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_002.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "size-matters",
      children: "Size Matters"
    }), "\n", createVNode(_components.p, {
      children: "In the end, I shoot cars. That means I\u2019m traveling to my destination. As much as I fell in love with the Sigma ART line, I just can\u2019t justify carrying those behemoths around. Not to mention I started using a Zhiyun Weebill-S gimbal and the 50mm Sigma f/1.4 pushes it\u2019s motors to the limits."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "the-finale",
      children: "The Finale"
    }), "\n", createVNode(_components.p, {
      children: "In the end, I had to ask myself what was most important. I came up with two requirements:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Had to be a reasonable size and weight"
      }), "\n", createVNode(_components.li, {
        children: "Had to have a consistent photo style across the lineup"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In the end, the Zeiss Batis lineup was the best fit. They\u2019re small-ish, relatively lightweight with great build quality. Also, whether I\u2019m shooting interiors with the 18mm or exteriors with the 85mm, every photo will have a consistent look and feel."
    }), "\n", createVNode(_components.h3, {
      id: "final-setup",
      children: "Final Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony A7iii"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 18mm f/2.8"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 25mm f/2.0"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 40mm f/2.0"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 85mm f/1.8"
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
const url = "src/content/blogs/2020-01-27-last-lens-update-ever.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2020-01-27-last-lens-update-ever.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2020-01-27-last-lens-update-ever.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
