import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "out-with-the-batis-on-to-zony",
  "tags": ["photography", "zeiss", "batis"],
  "category": "Photography",
  "date": "2018-04-08T00:00:00.000Z",
  "featured": "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003",
  "title": "Out With Zeiss Batis, On With Zeiss Sony",
  "description": "For the last year or so I've absolutely loved my Batis lenses. However, I think it's time for a change to the Sony Zeiss",
  "excerpt": "For the last year or so I've absolutely loved my Batis lenses. However, I think it's time for a change to the Sony Zeiss. The whole point of going mirrorless was to keep size and weight down as much as possible.",
  "related": ["car-photography-update", "lens-change-from-3-to-1"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-a-downgrade",
    "text": "What\u2019s a Downgrade"
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
      src: "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "whats-a-downgrade",
      children: "What\u2019s a Downgrade"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve owned the A7ii and Batis lenses for just over a year now. Great camera and lens combo, but for some reason I\u2019m finding the itch to go smaller."
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve decided to downgrade (?) to a Zeiss Sonnar T* 35mm f/2.8. The form factor just can\u2019t be beat. I think that I\u2019ll be more apt to shoot if I\u2019m not stuck carrying around a few primes. The Zony 35mm still has that Zeiss image and build quality, so I\u2019m hopeful it won\u2019t feel like a \u201Cdowngrade\u201D."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.jpg"
    }), "\n", createVNode(_components.h3, {
      id: "current-setup",
      children: "Current Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony Alpha A7ii"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Sonnar T* 35mm f/2.8"
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
const url = "src/content/blogs/2018-04-08-out-with-the-batis-on-to-zony.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2018-04-08-out-with-the-batis-on-to-zony.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2018-04-08-out-with-the-batis-on-to-zony.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
