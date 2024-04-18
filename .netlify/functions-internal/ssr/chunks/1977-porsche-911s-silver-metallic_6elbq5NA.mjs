import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["silver metallic", "porsche", "911s", "light red"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2019-08-19T00:00:00.000Z",
  "title": "1977 Porsche 911S Silver Metallic",
  "description": "I know mid-year 911's don't get a lot of love, but just look at that interior! A silver 911S Targa fetches over $50,000 on Bring a Trailer.",
  "location": {
    "lat": 30.370575114029656,
    "lon": -97.99249304673353,
    "text": "Dripping Springs, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1977-porsche-911s-25/",
    "sold": true,
    "price": 54e3
  },
  "related": ["2021/10/1973-bahia-red-porsche-911s", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_005.jpg",
    "gallery": ["shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_001.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_002.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_003.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_004.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_005.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_006.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_007.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_008.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_009.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_010.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_011.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "A local Porsche collector contacted me to help list this beautiful narrow-body, mid year \u201CS\u201D. The mid-year market has always lagged behind, due to relibility concerns, impact bumpers and emissions equipment."
    }), "\n", createVNode(_components.p, {
      children: "That said, this is a stunning example with its light-red interior. It\u2019s a near perfect drivers mid-year and I\u2019d be happy to drive it every day. Even five years later, this is still the fourth highest result for a 1977 Targa. It\u2019s a testament to this cars restoration and options."
    })]
  });
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
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/shoots/2019/08/1977-porsche-911s-silver-metallic.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/08/1977-porsche-911s-silver-metallic.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/08/1977-porsche-911s-silver-metallic.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
