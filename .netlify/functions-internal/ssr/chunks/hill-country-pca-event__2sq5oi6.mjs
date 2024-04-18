import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["coffee with cars", "dripping springs", "car show"],
  "category": "Car Show",
  "date": "2021-06-12T00:00:00.000Z",
  "title": "2021 Hill Country PCA Event",
  "description": "PCA Austin Chapter hosts a Hill Country drive and a tour of a privately owned Porsche collection.",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2020/02/lit-show-day-one", "2022/02/lit-show-day-one", "2019/03/porsches-at-the-shop"],
  "images": {
    "hero": "shoots/2021/2021-06-12-pca-event/2021-pca-event_005.jpg",
    "gallery": ["shoots/2021/2021-06-12-pca-event/2021-pca-event_001.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_002.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_003.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_004.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_005.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_006.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_007.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_008.jpg", "shoots/2021/2021-06-12-pca-event/2021-pca-event_009.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["PCA of Austin has been trying to host an event at a friend\u2019s Porsche collection and shop for years. However, COVID and other issues pushed it back several times. Finally, the stars aligned and the event was held on ", createVNode("a", {
        href: "https://hcrpca.org/event/john-patterson-collection-tech-session",
        title: "PCA Event in Austin",
        children: "June 12th, 2021"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["After a spirited Hill Country drive, PCA members were invited over for a tour of the collection and shop, as well as food provided by ", createVNode("a", {
        href: "https://www.crepecrazy.com",
        title: "Crepe Crazy",
        children: "Crepe Crazy"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Lots of great Porsches inside (of course) and outside the shop. 964\u2019s, early 911\u2019s and later GT3\u2019s, good representation all around."
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
const url = "src/content/shoots/2021/06/hill-country-pca-event.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/06/hill-country-pca-event.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/06/hill-country-pca-event.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
