import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "car-photography-update",
  "tags": ["photography", "sony", "zeiss", "cars"],
  "category": "Photography",
  "date": "2018-08-11T00:00:00.000Z",
  "featured": "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_002",
  "title": "Another Car Photography Update",
  "description": "I've started shooting lots of cars for Bring a Trailer auctions. That means I'm in need of a lens upgrade!",
  "excerpt": "I've started shooting lots of cars for Bring a Trailer auctions. One single 35mm Sony Zeiss wasn't going to cut it. That means I'm in need of a lens upgrade!",
  "related": ["lens-change-from-3-to-1", "sigma-art-ruined-me"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ive-made-a-huge-mistake",
    "text": "I\u2019ve Made a Huge Mistake"
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
      src: "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_009.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "ive-made-a-huge-mistake",
      children: "I\u2019ve Made a Huge Mistake"
    }), "\n", createVNode(_components.p, {
      children: "Over the past few months I\u2019ve started shooting cars for Bring a Trailer auctions. While I absolutely love shooting cars, my current 35mm setup isn\u2019t well suited to this. 35mm is a bit too wide to accurately shoot car exteriors and a bit too tight to get complete interior shots. Yup, time to change it up again."
    }), "\n", createVNode(_components.p, {
      children: "This is where I look back and shake my head when I made the foolish decision to get rid of my Zeiss Batis lenses. 25mm and 85mm would have been perfect. Rather than going back to that setup, I\u2019ll add two new lenses to my bag. I\u2019m thinking the Sony Zeiss 16-35mm f/4 and the Sony Zeiss 55mm f/1.8."
    }), "\n", createVNode(_components.p, {
      children: "I also would like to start shooting more video. Turns out the A7iii was just released and it\u2019s a serious video upgrade over the A7ii."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_003.jpg"
    }), "\n", createVNode(_components.h3, {
      id: "current-setup",
      children: "Current Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony A7iii"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Sonnar T* 55mm f/1.8"
      }), "\n", createVNode(_components.li, {
        children: "Zeiss Vario-Tessar T* 16-35mm f/4"
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
const url = "src/content/blogs/2018-08-11-car-photography-update.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2018-08-11-car-photography-update.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2018-08-11-car-photography-update.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
