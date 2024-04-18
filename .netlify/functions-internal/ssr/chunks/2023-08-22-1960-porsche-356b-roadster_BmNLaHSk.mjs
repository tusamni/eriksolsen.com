import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "356b", "roadster", "austin", "texas"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2023-08-22T00:00:00.000Z",
  "title": "Blue 1960 Porsche 365B Roadster",
  "location": {
    "text": "Austin, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1960-porsche-356b-roadster-21/",
    "sold": true,
    "price": 277e3,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_009.jpg",
    "gallery": ["shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_001.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_002.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_003.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_004.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_005.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_006.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_007.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_008.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_009.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_010.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_011.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_012.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_013.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_014.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_015.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_016.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_017.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_018.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_019.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_020.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_021.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_022.jpg", "shoots/2023/2023-08-22-1960-porsche-356b-roadster/1960-porsche-356b-roadster_023.jpg"]
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
const url = "src/content/shoots/2023/08/2023-08-22-1960-porsche-356b-roadster.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/08/2023-08-22-1960-porsche-356b-roadster.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/08/2023-08-22-1960-porsche-356b-roadster.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
