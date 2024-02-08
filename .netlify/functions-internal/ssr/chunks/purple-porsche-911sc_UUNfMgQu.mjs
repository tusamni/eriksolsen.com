import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["austin", "porsche", "magazine", "paint to sample"],
  "category": "Miscellaneous",
  "brand": "Porsche",
  "date": "2019-05-26T00:00:00.000Z",
  "title": "Paint to Sample Purple Shoot",
  "description": "No, I didn't get to shoot for the magazine, but I did get to tag along and watch a professional work.",
  "hero": "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_007.jpg",
  "headline": "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_007.jpg",
  "gallery": ["shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_001.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_002.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_003.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_004.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_005.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_006.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_007.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_008.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_009.jpg", "shoots/2019/2019-05-20-purple-porsche-shoot/purple-911sc-shoot_010.jpg"],
  "related": ["2019/03/porsches-at-the-shop", "2019/12/shop-shoot", "2021/06/1989-porsche-930-turbo-flachbau"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "inside-shoot",
    "text": "Inside Shoot"
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
      id: "inside-shoot",
      children: "Inside Shoot"
    }), "\n", createVNode(_components.p, {
      children: "A friend was lucky enough to snag this out of control, \u201Cpaint-to-sample\u201D purple 911SC from the original owner. Her story is awesome. She literally walked across the street from a Porsche dealer, bought a felt, purple pen from a Hobby Lobby, gave it to the salesmen, and said, \u201CI want it that color\u201D."
    }), "\n", createVNode(_components.p, {
      children: "He\u2019s now in possession of the car and the pen!"
    }), "\n", createVNode(_components.p, {
      children: "I was able to tag along for a magazine shoot to feature the car. Most of the interior shots are dark as I wasn\u2019t in control of the lighting. It was neat to watch another photographer work, minus the 100 degree Texas weather inside a giant metal box."
    }), "\n", createVNode($$Gallery, {
      children: createVNode($$Grid, {
        children: frontmatter.gallery.map(i => createVNode($$GridImage, {
          children: createVNode($$Picture, {
            src: i
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
const url = "src/content/shoots/2019/05/purple-porsche-911sc.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/purple-porsche-911sc.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/purple-porsche-911sc.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
