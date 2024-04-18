import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "longhood", "911s", "bahia red"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2021-10-24T00:00:00.000Z",
  "featured": true,
  "title": "1973 Porsche 911S Bahia Red",
  "description": "A two-family owned 73S in a beautiful shade of Bahia gets listed on Bring a Trailer and sells for $143,000!",
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1973-porsche-911s-2-4l-coupe-6/",
    "sold": true,
    "price": 143e3,
    "logo": "bring-a-trailer"
  },
  "location": {
    "lat": 30.370575114029656,
    "lon": -97.99249304673353,
    "text": "Austin, TX"
  },
  "related": ["2019/08/1977-porsche-911s-silver-metallic", "2019/08/1973-porsche-911s-targa-signal-yellow"],
  "images": {
    "hero": "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_015.jpg",
    "gallery": ["shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_001.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_002.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_003.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_004.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_005.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_006.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_007.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_008.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_009.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_010.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_011.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_012.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_013.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_014.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_015.jpg", "shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_016.jpg"]
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
const url = "src/content/shoots/2021/10/1973-bahia-red-porsche-911s.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/10/1973-bahia-red-porsche-911s.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/10/1973-bahia-red-porsche-911s.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
