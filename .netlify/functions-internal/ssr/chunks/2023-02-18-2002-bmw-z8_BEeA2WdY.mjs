import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["bmw", "z8", "titanium silver", "blanco", "texas", "bring a trailer"],
  "category": "Auction",
  "brand": "BMW",
  "date": "2023-02-18T00:00:00.000Z",
  "title": "Titanium Silver 2002 BMW Z8",
  "location": {
    "text": "Blanco, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/2002-bmw-z8-69/",
    "sold": true,
    "price": 206e3,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_013.jpg",
    "gallery": ["shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_001.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_002.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_003.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_004.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_005.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_006.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_007.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_008.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_009.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_010.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_011.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_012.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_013.jpg", "shoots/2023/2023-02-18-2002-bmw-z8/2002-bmw-z8_014.jpg"]
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
const url = "src/content/shoots/2023/02/2023-02-18-2002-bmw-z8.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/02/2023-02-18-2002-bmw-z8.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/02/2023-02-18-2002-bmw-z8.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
