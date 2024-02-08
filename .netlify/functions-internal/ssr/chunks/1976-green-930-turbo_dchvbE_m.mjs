import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import { $ as $$Figure } from './pages/faq_Ul6qjf2E.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["ice metallic green", "porsche", "930 turbo"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2018-05-08T00:00:00.000Z",
  "title": "1976 Ice Metallic Green 930 Turbo",
  "description": "My first shoot for Bring a Trailer is a pristine 930 Turbo painted in a glorious shade of Ice Metallic Green that sells for $165,000!",
  "location": {
    "text": "Austin, TX",
    "lat": 30.22611905489276,
    "lon": -97.94989092086459,
    "place": "Mount Olive Lutheran Church Austin, TX"
  },
  "hero": "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_005.jpg",
  "headline": "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.jpg",
  "gallery": ["shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_001.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_002.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_004.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_005.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_006.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_007.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_009.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_010.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_011.jpg"],
  "related": ["2019/08/1973-porsche-911s-targa-signal-yellow", "2019/03/1971-conda-green-911e"],
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1976-porsche-930-turbo-carrera-5/",
    "sold": true,
    "price": 165e3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ice-cold",
    "text": "Ice Cold"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "ice-cold",
      children: "Ice Cold"
    }), "\n", createVNode("div", {
      class: "grid grid-cols-12 gap-8",
      children: [createVNode("div", {
        class: "col-span-6",
        children: [createVNode(_components.p, {
          children: "A friend with a rather large Porsche collection decided to start focusing strictly on air-cooled, early 911\u2019s. So unfortunately, his two 930 Turbo\u2019s had to go. He knew that I had a camera and asked if I was interested in shooting the car for a \u201CBring a Trailer\u201D auction. Of course I jumped at the opportunity. We met early morning at a nearby church."
        }), createVNode(_components.p, {
          children: "Looking back at this shoot years later, there are so many things I would have done differently. The rear of some of the shots are far too busy, 35mm is too wide to shoot the exterior, I could go on and on."
        }), createVNode(_components.p, {
          children: "But no matter what, 930\u2019s are one of my favorite Porsches, and in this color, who cares what the photos look like?"
        })]
      }), createVNode($$Figure, {
        src: frontmatter.gallery[0],
        figureClass: "not-prose col-span-6",
        class: "w-full h-full object-cover"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[1],
        figureClass: "not-prose col-span-4"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[2],
        figureClass: "not-prose col-span-4"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[3],
        figureClass: "not-prose col-span-4"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[4],
        figureClass: "not-prose col-span-12"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[5],
        figureClass: "not-prose col-span-6"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[6],
        figureClass: "not-prose col-span-6"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[8],
        figureClass: "not-prose col-span-12"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[7],
        figureClass: "not-prose col-span-4"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[9],
        figureClass: "not-prose col-span-4"
      }), createVNode($$Figure, {
        src: frontmatter.gallery[10],
        figureClass: "not-prose col-span-4"
      })]
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
const url = "src/content/shoots/2018/05/1976-green-930-turbo.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/05/1976-green-930-turbo.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/05/1976-green-930-turbo.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
