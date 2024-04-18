import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["conda green", "porsche", "911e", "auction", "bring a trailer"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2019-03-26T00:00:00.000Z",
  "title": "1971 Conda Green Porsche 911E",
  "description": "48,000 original miles, unrestored and near perfect. This car fetches the highest price for a 911E Longhood on BaT, and it's worth every penny.",
  "location": {
    "text": "Dripping Springs, TX",
    "lat": 30.259390586566116,
    "lon": -98.0451141544943
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1971-porsche-911e-10/",
    "sold": true,
    "price": 211911
  },
  "related": ["2019/08/1973-porsche-911s-targa-signal-yellow", "2019/08/1977-porsche-911s-silver-metallic", "2021/10/1973-bahia-red-porsche-911s"],
  "images": {
    "hero": "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_009.jpg",
    "gallery": ["shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_001.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_002.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_003.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_004.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_005.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_006.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_007.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_008.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_009.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_010.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_011.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_012.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_013.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_014.jpg", "shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_015.jpg"]
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
const url = "src/content/shoots/2019/03/1971-conda-green-911e.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/1971-conda-green-911e.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/1971-conda-green-911e.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
