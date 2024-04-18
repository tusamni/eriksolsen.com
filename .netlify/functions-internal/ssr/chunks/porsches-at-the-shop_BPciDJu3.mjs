import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["dripping springs", "porsche"],
  "category": "Miscellaneous",
  "make": "Porsche",
  "date": "2019-03-23T00:00:00.000Z",
  "title": "Porsches at the Shop",
  "description": "With my upgrade from a single Zeiss lens to multiple Zeiss lenses it's time to take a trip to a nearby Porsche restoration shop in Dripping Springs, TX.",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2019/12/shop-shoot", "2021/06/hill-country-pca-event"],
  "images": {
    "hero": "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg",
    "gallery": ["shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_001.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_002.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_003.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_004.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_006.jpg"]
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
const url = "src/content/shoots/2019/03/porsches-at-the-shop.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/porsches-at-the-shop.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/porsches-at-the-shop.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
