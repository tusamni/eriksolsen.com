import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "new-camera-and-lenses",
  "tags": ["photography", "sony", "zeiss", "batis"],
  "category": "Photography",
  "date": "2017-01-11T00:00:00.000Z",
  "featured": "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004",
  "title": "Moving to Full Frame and Zeiss Batis",
  "description": "As much as I love my A6000, it's time for an upgrade. I'm making the jump to a full frame Sony A7ii along with Zeiss Batis lenses.",
  "excerpt": "I think I've got a serious case of FOMO (fear of missing out) when it comes to full frame. I haven't reached the capabilities of my Sony A6000, but I still can't shake the feeling that I'd be getting more out of a full frame A7.",
  "related": ["out-with-the-batis-on-to-zony", "car-photography-update"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "full-frame-upgrade",
    "text": "Full Frame Upgrade"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Figure, {
      src: "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_002.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "full-frame-upgrade",
      children: "Full Frame Upgrade"
    }), "\n", createVNode(_components.p, {
      children: ["For the last three years I\u2019ve been using a Sony A6000 with a 16-50mm kit lens. It\u2019s been a good camera, ", createVNode(_components.em, {
        children: "actually it\u2019s been great"
      }), ". I shouldn\u2019t have any complaints, right?"]
    }), "\n", createVNode(_components.p, {
      children: "Due to my tech addiction, I\u2019ve got the itch to go full frame. So I\u2019ve decided to sell it. My justification is that I\u2019ve never had a full frame camera before, and frankly the APC-C lens selection for the Sony\u2019s right now is pretty weak. There are far greater options for the full frame Sony\u2019s."
    }), "\n", createVNode(_components.p, {
      children: "So Amazon is currently in the process of delivering:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony A7ii"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 25mm f/2"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Batis 85mm f/1.8"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ll try to keep this list updated as much as possible. I have a bad habit of trading and upgrading gear a lot. I\u2019m slowly learning that my skills are quickly falling behind the capabilities of my equipment."
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
const url = "src/content/blogs/2017-01-11-new-camera-and-lenses.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2017-01-11-new-camera-and-lenses.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2017-01-11-new-camera-and-lenses.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
