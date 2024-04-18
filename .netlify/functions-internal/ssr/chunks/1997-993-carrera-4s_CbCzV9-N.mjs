import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", 993, "carrera", "white", "cars and bids"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2023-06-30T00:00:00.000Z",
  "featured": true,
  "title": "White 1997 Porsche 911 Carrera 4S",
  "description": "Meet the star of the auction, a timeless beauty - the 1997 Porsche 911 Carrera 4S Coupe. This 993 brings six-figures at Cars & Bids!",
  "location": {
    "lat": 30.370575114029656,
    "lon": -97.99249304673353,
    "text": "Dripping Springs, TX"
  },
  "auction": {
    "site": "Cars and Bids",
    "url": "https://carsandbids.com/auctions/3vW0QW4N/1997-porsche-911-carrera-4s-coupe",
    "sold": true,
    "price": 101500,
    "logo": "cars-and-bids"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_004.jpg",
    "gallery": ["shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_001.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_002.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_003.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_004.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_005.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_006.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_007.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_008.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_009.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_010.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_011.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_012.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_013.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_014.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_015.jpg", "shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_016.jpg"]
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
const url = "src/content/shoots/2023/06/1997-993-carrera-4s.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/06/1997-993-carrera-4s.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/06/1997-993-carrera-4s.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
