import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import { b as $$Container, a as $$Section } from './pages/__CJVIvjxO.mjs';
import { $ as $$Figure, b as $$Prose, c as $$Flex, d as $$FlexItem, a as $$Split } from './pages/__COl5kc9O.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["lit show", "porsche", "los angeles"],
  "category": "Car Show",
  "date": "2020-02-29T00:00:00.000Z",
  "customLayout": true,
  "title": "LIT Show 2020 Part 3",
  "description": "Day three and we're off to CarParc USA and Emory Motorsports. I got to shoot a Singer 911 as well!",
  "location": {
    "text": "Los Angeles, CA"
  },
  "related": ["2020/02/lit-show-day-one", "2020/02/lit-show-day-two", "2020/03/lit-show-day-four"],
  "images": {
    "hero": "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg",
    "gallery": ["shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_001.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_002.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_003.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_004.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_005.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_006.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_007.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_008.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_009.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_010.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_011.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_012.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_013.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_015.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_016.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_017.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_018.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_019.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_020.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_021.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_022.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_023.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_024.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_025.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_026.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_027.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_028.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_029.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_030.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_031.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_032.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_033.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_034.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_035.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_036.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_037.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_038.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_039.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_040.jpg", "shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_041.jpg"]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "outside-the-hotel",
    "text": "Outside the Hotel"
  }, {
    "depth": 2,
    "slug": "carparc-usa",
    "text": "CarParc USA"
  }, {
    "depth": 2,
    "slug": "emory-motorsports-open-house",
    "text": "Emory Motorsports Open House"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    }), createVNode($$Container, {
      children: createVNode($$Prose, {
        children: [createVNode(_components.h2, {
          id: "outside-the-hotel",
          children: "Outside the Hotel"
        }), createVNode(_components.p, {
          children: ["Staying at the ", createVNode(_components.a, {
            href: "https://www.hilton.com/en/hotels/laxahhh-hilton-los-angeles-airport/",
            children: "LAX Hilton"
          }), " in February 2020 was an interesting experience in early 2020. COVID was in the early stages and flights were arriving from hotspots across the world. However, none of that mattered when there was a Singer 911, 911R and a 996\r\nGT2 parked out front!"]
        })]
      })
    }), createVNode($$Container, {
      size: "large",
      children: createVNode($$Flex, {
        children: frontmatter.images.gallery.slice(0, 16).map(p => createVNode($$FlexItem, {
          children: createVNode($$Figure, {
            src: p,
            figureClass: "w-full h-full",
            class: "w-full h-full object-cover"
          })
        }))
      })
    }), createVNode($$Container, {
      children: createVNode($$Prose, {
        children: [createVNode(_components.h2, {
          id: "carparc-usa",
          children: "CarParc USA"
        }), createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "https://carparcusa.com/",
            children: "CarParc"
          }), " USA is an interesting place, it\u2019s one part Porsche, one part art gallery. The Gulf hot rod up front was amazing. Attention to detail was insane and I would have loved to take that car home with me. I loved the yellow 911S with red houndstooth as well, such a perfect combination of style. CarParc USA had a Celette which was neat to see. There\u2019s not too many of those left around."]
        })]
      })
    }), createVNode($$Container, {
      size: "large",
      children: createVNode($$Flex, {
        children: frontmatter.images.gallery.slice(16, 35).map(p => createVNode($$FlexItem, {
          children: createVNode($$Figure, {
            src: p,
            figureClass: "w-full h-full",
            class: "w-full h-full object-cover"
          })
        }))
      })
    }), createVNode($$Container, {
      children: createVNode($$Split, {
        children: [createVNode("div", {
          slot: "heading",
          children: createVNode($$Prose, {
            size: "prose-xl",
            children: [createVNode(_components.h2, {
              id: "emory-motorsports-open-house",
              children: "Emory Motorsports Open House"
            }), createVNode(_components.p, {
              children: "Rod Emory is to 356\u2019s as Singer is to 911\u2019s. They\u2019re buying a ton of restoration level 356\u2019s and modifiying them for their customers. I love the unique customizations that come out of tuners like this. The obvious star of the show was Emory\u2019s shop car, a 356 they modified to have rear mounted twin turbos."
            }), createVNode(_components.p, {
              children: ["At the entrance to the shop ", createVNode(_components.a, {
                href: "https://www.guntherwerks.com/",
                children: "Gunther Werks"
              }), " brought along a mint green 400R. Absolutely insane."]
            })]
          })
        }), createVNode($$Flex, {
          children: frontmatter.images.gallery.slice(35, 41).map(p => createVNode($$FlexItem, {
            rowHeight: "md:h-[200px]",
            children: createVNode($$Figure, {
              src: p,
              figureClass: "w-full h-full",
              class: "w-full h-full object-cover"
            })
          }))
        })]
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
const url = "src/content/shoots/2020/02/lit-show-day-three.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/02/lit-show-day-three.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/02/lit-show-day-three.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
