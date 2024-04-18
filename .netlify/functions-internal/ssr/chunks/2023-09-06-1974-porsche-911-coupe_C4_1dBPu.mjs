import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", 911, "coupe", "austin", "texas"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2023-09-06T00:00:00.000Z",
  "title": "White 1974 Porsche 911 Coupe",
  "location": {
    "text": "Austin, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1974-porsche-911-coupe-4/",
    "sold": true,
    "price": 8e4,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_002.jpg",
    "gallery": ["shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_001.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_002.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_003.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_004.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_005.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_006.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_007.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_008.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_009.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_010.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_011.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_012.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_013.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_014.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_015.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_016.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_017.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_018.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_019.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_020.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_021.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_022.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_023.jpg", "shoots/2023/2023-09-06-1974-porsche-911-coupe/1974-porsche-911-coupe_024.jpg"]
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
const url = "src/content/shoots/2023/09/2023-09-06-1974-porsche-911-coupe.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/09/2023-09-06-1974-porsche-911-coupe.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/09/2023-09-06-1974-porsche-911-coupe.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
