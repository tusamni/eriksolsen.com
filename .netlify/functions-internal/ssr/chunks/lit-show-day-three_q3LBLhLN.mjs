import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "draft": true,
  "tags": ["lit show", "porsche", "los angeles"],
  "category": "Car Show",
  "date": "2022-02-26T00:00:00.000Z",
  "title": "LIT Show 2022 Part 3",
  "description": "Day one at LIT Show 2020 takes us to CPR Classic, Wholesale California and the Sierra Madre Collection open house.",
  "related": ["2022/02/lit-show-day-one", "2022/02/lit-show-day-two", "2022/02/lit-show-day-four"],
  "hero": "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_021.jpg",
  "headline": "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_021.jpg",
  "gallery": {
    "gallery01": ["shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_001.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_002.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_003.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_004.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_005.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_006.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_007.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_008.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_009.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_010.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_011.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_012.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_013.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_014.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_015.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_016.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_017.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_018.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_019.jpg"],
    "gallery02": ["shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_020.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_021.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_022.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_023.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_024.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_025.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_026.jpg", "shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_027.jpg"]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "european-collectibles",
    "text": "European Collectibles"
  }, {
    "depth": 2,
    "slug": "son-of-cobra",
    "text": "Son of Cobra"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "european-collectibles",
      children: "European Collectibles"
    }), "\n", createVNode($$Gallery, {
      children: createVNode($$Grid, {
        children: frontmatter.gallery.gallery01.map(i => createVNode($$GridImage, {
          children: createVNode($$Picture, {
            src: i
          })
        }))
      })
    }), "\n", createVNode(_components.h2, {
      id: "son-of-cobra",
      children: "Son of Cobra"
    }), "\n", createVNode($$Gallery, {
      children: createVNode($$Grid, {
        children: frontmatter.gallery.gallery02.map(i => createVNode($$GridImage, {
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
