import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["bmw", 2002, "orange", "blanco", "texas"],
  "category": "Auction",
  "brand": "BMW",
  "date": "2023-11-04T00:00:00.000Z",
  "title": "Orange 1976 BMW 2002 2.2L",
  "description": "A perfectly modified 2.2 liter BMW 2002 with individual throttle bodies gets run through the hill country.",
  "location": {
    "text": "Blanco, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1976-bmw-2002-215/",
    "sold": true,
    "price": 27e3,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_001.jpg",
    "gallery": ["shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_001.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_002.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_003.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_004.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_005.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_006.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_007.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_008.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_009.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_010.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_011.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_012.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_013.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_014.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_015.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_016.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_017.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_018.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_019.jpg", "shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_020.jpg"]
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
const url = "src/content/shoots/2023/11/2023-11-04-1976-bmw-2002.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/11/2023-11-04-1976-bmw-2002.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/11/2023-11-04-1976-bmw-2002.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
