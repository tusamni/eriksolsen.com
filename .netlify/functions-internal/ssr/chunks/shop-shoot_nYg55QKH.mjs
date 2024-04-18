import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "dripping springs"],
  "category": "Miscellaneous",
  "make": "Porsche",
  "date": "2019-12-28T00:00:00.000Z",
  "title": "Porsche Collection Test Shoot",
  "description": "A quick trip over to a friend's Porsche collection to test out my new Sigma 50mm 1.4 Art lens.",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2019/03/porsches-at-the-shop", "2019/05/purple-porsche-911sc", "2023/06/1997-993-carrera-4s"],
  "images": {
    "hero": "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg",
    "gallery": ["shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg", "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_002.jpg", "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_003.jpg", "shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/shoots/2019/12/shop-shoot.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/12/shop-shoot.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/12/shop-shoot.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
