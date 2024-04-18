import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["mercedes", "amg", "sl600", "texas", "bring a trailer"],
  "category": "Auction",
  "brand": "Mercedes-Benz",
  "date": "2022-07-25T00:00:00.000Z",
  "title": "2001 Mercedes-Benz AMG SL600",
  "description": "This R129 Mercedes AMG in stunning Magma Red with the rare panoramic glass roof sells for $65,000 on Bring a Trailer",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "logo": "bring-a-trailer",
    "url": "https://bringatrailer.com/listing/2001-mercedes-benz-sl600-23/",
    "sold": true,
    "price": 65e3
  },
  "related": ["2020/05/1966-jaguar-xke", "2020/05/chevrolet-impala-ss-convertible"],
  "images": {
    "hero": "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_003.jpg",
    "gallery": ["shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_001.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_002.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_003.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_004.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_005.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_006.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_007.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_008.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_009.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_010.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_011.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_012.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_013.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_014.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_015.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_016.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_017.jpg", "shoots/2022/2022-07-25-mercedes-benz-sl600/2001-mercedes-benz-sl600-amg_018.jpg"]
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
const url = "src/content/shoots/2022/07/2001-mercedes-benz-sl600-amg.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/07/2001-mercedes-benz-sl600-amg.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/07/2001-mercedes-benz-sl600-amg.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
