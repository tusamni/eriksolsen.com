import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["cadillac", "xlr", "black", "corpus christi", "texas", "bring a trailer"],
  "category": "Auction",
  "brand": "Cadillac",
  "date": "2023-03-04T00:00:00.000Z",
  "title": "2006 Cadillac XLR-V",
  "location": {
    "text": "Corpus Christi, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/2006-cadillac-xlr-v-40/",
    "sold": false,
    "price": 33750,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_003.jpg",
    "gallery": ["shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_001.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_002.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_003.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_004.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_005.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_006.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_007.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_008.jpg", "shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_009.jpg"]
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
const url = "src/content/shoots/2023/03/2023-03-04-2006-cadillac-xlr-v.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/03/2023-03-04-2006-cadillac-xlr-v.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/03/2023-03-04-2006-cadillac-xlr-v.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
