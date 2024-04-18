import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import { b as $$Container, a as $$Section } from './pages/__CJVIvjxO.mjs';
import { $ as $$Figure, a as $$Split, b as $$Prose, c as $$Flex, d as $$FlexItem } from './pages/__COl5kc9O.mjs';
import 'clsx';

const frontmatter = {
  "draft": true,
  "tags": ["lit show", "porsche", "los angeles"],
  "category": "Car Show",
  "date": "2022-02-26T00:00:00.000Z",
  "customLayout": true,
  "title": "LIT Show 2022 Part 3",
  "description": "European Collectibles shows off an original 550 Spyder and Son of Cobra displays their carbon-bodied 2002 BMW.",
  "related": ["2022/02/lit-show-day-one", "2022/02/lit-show-day-two", "2022/02/lit-show-day-four"],
  "images": {
    "hero": "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_021.jpg",
    "gallery": ["shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_001.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_002.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_003.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_004.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_005.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_006.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_007.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_008.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_009.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_010.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_011.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_012.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_013.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_014.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_015.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_016.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_017.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_018.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_019.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_020.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_021.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_022.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_023.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_024.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_025.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_026.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_027.jpg"]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "european-collectibles",
    "text": "European Collectibles"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode($$Section, {
    children: [createVNode($$Container, {
      size: "large",
      children: createVNode($$Figure, {
        src: frontmatter.images.hero
      })
    }), createVNode($$Container, {}), createVNode($$Container, {
      children: createVNode($$Split, {
        float: true,
        children: [createVNode("div", {
          slot: "heading",
          children: createVNode($$Prose, {
            size: "prose-xl",
            children: [createVNode(_components.h2, {
              id: "european-collectibles",
              children: "European Collectibles"
            }), createVNode(_components.p, {
              children: "European Collectibles is such a beautiful shop and they\u2019ve always got great vehicles to show off. I really liked the black early 911S. I don\u2019t know that I\u2019ve ever seen one in black, and it\u2019s quite striking."
            })]
          })
        }), createVNode($$Flex, {
          children: frontmatter.images.gallery.slice(0, 19).map(p => createVNode($$FlexItem, {
            rowHeight: "md:h-[200px]",
            children: createVNode($$Figure, {
              src: p,
              figureClass: "w-full h-full",
              class: "w-full h-full object-cover"
            })
          }))
        })]
      })
    }), createVNode($$Container, {
      children: createVNode($$Prose, {
        children: createVNode(_components.p, {
          children: "Tucked away in an industrial park alleyway, you\u2019ll find Son of Cobra. They\u2019re a manufacturer of surfboards and 2002 BMW carbon fiber parts. To show off their chops, they had a seafoam green BMW 2002 on display with their full array of carbon parts. Their attention to detail is off the charts."
        })
      })
    }), createVNode($$Container, {
      size: "large",
      children: createVNode($$Flex, {
        children: frontmatter.images.gallery.slice(19, 27).map(p => createVNode($$FlexItem, {
          children: createVNode($$Figure, {
            src: p,
            figureClass: "w-full h-full",
            class: "w-full h-full object-cover"
          })
        }))
      })
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
const url = "src/content/shoots/2022/02/lit-show-day-three.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/02/lit-show-day-three.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/02/lit-show-day-three.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
