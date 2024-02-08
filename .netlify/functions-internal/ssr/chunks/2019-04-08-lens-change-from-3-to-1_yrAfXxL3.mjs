import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "slug": "lens-change-from-3-to-1",
  "tags": ["photography", "sony", "zeiss"],
  "category": "Photography",
  "date": "2019-04-08T00:00:00.000Z",
  "featured": "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_011",
  "related": ["sigma-art-ruined-me", "last-lens-update-ever"],
  "title": "From Three Zeiss Lenses to One Sony",
  "description": "I'm currently loaded up with three awesome Sony Zeiss lenses. But it's time to downsize to one long zoom",
  "excerpt": "I'm currently loaded up with the awesome Sony Zeiss lenses, the 16-35mm f/4, 35mm f/2.8, 55mm f/1.8. It's a great trio. Lately I've been wondering if it's possible to roll those into one lens, mainly the Sony 24-105 G."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-the-change",
    "text": "Why the Change?"
  }, {
    "depth": 2,
    "slug": "down-with-the-g",
    "text": "Down With the \u201CG\u201D"
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
      src: "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_010.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "why-the-change",
      children: "Why the Change?"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve got three great lenses right now, the Sony Zeiss 16-35, Sony Zeiss 35mm and Sony Zeiss 55mm. I shouldn\u2019t be complaining about these lenses. They\u2019re awesome, all around great performers and beside the 16-35mm, they\u2019re all pretty compact."
    }), "\n", createVNode(_components.p, {
      children: "I felt that I was too heavy on the lower focal range. Three lenses under 55mm seemed like a waste. I wasn\u2019t using the 35mm f/2.8 as much as I should. I figured it\u2019d be a great travel lens, small and lightweight. But, for most of my shoots, I\u2019m driving to the location and don\u2019t have to worry about size and weight."
    }), "\n", createVNode(_components.p, {
      children: "The 16-35mm was great and I loved it for interior shots. But sometimes I\u2019d find myself shooting the exterior of the car with that lens. The distortion was too much for anything other than those tight interior shots."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_005.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "down-with-the-g",
      children: "Down With the \u201CG\u201D"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve been eyeing the 24-70mm G Master. It seems too good to be true. But it\u2019s tough to stomach trading all my gear for a $2,300 lens. I\u2019m not a professional, so I can\u2019t swallow that kind of price. Also, I\u2019d be losing 8mm on the low side and only gaining about 15mm on the high side. Sure, it\u2019s nice having one lens instead of 3, but it\u2019s just not enough of an upgrade in regards to focal length."
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve been reading about the SEL24105G that Sony recently released. Yep, it won\u2019t be quite as sharp as a \u201CGM\u201D but, it\u2019s close to half as expensive and would give me another 35mm of focal length. I do lose out on an extra stop of light, f/4 vs f/2.8. But again, for the cars I\u2019m shooting, light isn\u2019t usually a problem and I like to shoot above f/4 to keep the car in focus. I\u2019ve been happy with the performance so far in my tests. I haven\u2019t had a chance to shoot a car yet, but that should change next weekend."
    }), "\n", createVNode(_components.p, {
      children: "The other lenses will be up for auction on eBay starting today."
    }), "\n", createVNode($$Figure, {
      src: "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_001.jpg"
    }), "\n", createVNode(_components.h3, {
      id: "current-setup",
      children: "Current Setup"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sony A7iii"
      }), "\n", createVNode(_components.li, {
        children: "Sony 24-105 G f/4"
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
const url = "src/content/blogs/2019-04-08-lens-change-from-3-to-1.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2019-04-08-lens-change-from-3-to-1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2019-04-08-lens-change-from-3-to-1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
