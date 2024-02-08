import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { $ as $$Grid, a as $$GridImage, b as $$Gallery } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["blanco", "jaguar", "xke", "auction", "bring a trailer"],
  "category": "Auction",
  "date": "2020-05-03T00:00:00.000Z",
  "title": "1966 Jaguar XKE Series 1",
  "description": "Test subtitle, please replace this!",
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1966-jaguar-xke-roadster-10/",
    "sold": false,
    "price": 114500,
    "logo": "bring-a-trailer"
  },
  "related": ["2020/05/chevrolet-impala-ss-convertible", "2022/11/1965-backdraft-cobra"],
  "hero": "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_005.jpg",
  "headline": "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_005.jpg",
  "gallery": ["shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_001.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_002.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_003.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_004.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_005.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_006.jpg", "shoots/2020/2020-05-03-jaguar-e-type/1966-jaguar-xke-series-1_007.jpg"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Gallery, {
    children: createVNode($$Grid, {
      children: frontmatter.gallery.map(i => createVNode($$GridImage, {
        children: createVNode($$Picture, {
          src: i
        })
      }))
    })
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
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/shoots/2020/05/1966-jaguar-xke.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/05/1966-jaguar-xke.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/05/1966-jaguar-xke.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
