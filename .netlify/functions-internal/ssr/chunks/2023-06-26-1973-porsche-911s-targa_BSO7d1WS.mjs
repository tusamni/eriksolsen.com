import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "911s", "targa", "signal yellow", "austin", "texas"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2023-06-26T00:00:00.000Z",
  "title": "Signal Yellow 1973 Porsche 911S Targa",
  "location": {
    "text": "Austin, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1973-porsche-911s-targa-26/",
    "sold": true,
    "price": 268e3,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_001.jpg",
    "gallery": ["shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_001.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_001.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_002.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_003.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_004.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_005.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_006.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_007.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_008.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_009.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_010.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_011.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_012.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_013.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_014.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_015.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_016.jpg", "shoots/2023/2023-06-26-1973-porsche-911s-targa/1973-porsche-911s-targa_017.jpg"]
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
const url = "src/content/shoots/2023/06/2023-06-26-1973-porsche-911s-targa.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/06/2023-06-26-1973-porsche-911s-targa.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/06/2023-06-26-1973-porsche-911s-targa.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
