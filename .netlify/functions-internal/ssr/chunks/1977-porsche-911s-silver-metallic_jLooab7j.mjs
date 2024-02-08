import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { $ as $$Grid, a as $$GridImage, b as $$Gallery } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["silver metallic", "porsche", "911s", "light red"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2019-08-19T00:00:00.000Z",
  "title": "1977 Porsche 911S Silver Metallic",
  "description": "Test description, please replace!",
  "location": {
    "lat": 30.370575114029656,
    "lon": -97.99249304673353,
    "text": "Dripping Springs, TX"
  },
  "related": ["2021/10/1973-bahia-red-porsche-911s", "2021/06/1989-porsche-930-turbo-flachbau"],
  "hero": "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_005.jpg",
  "headline": "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_001.jpg",
  "gallery": ["shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_001.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_002.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_003.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_004.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_005.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_006.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_007.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_008.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_009.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_010.jpg", "shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_011.jpg"],
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1977-porsche-911s-25/",
    "sold": true,
    "price": 54e3
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Gallery, {
    children: createVNode($$Grid, {
      children: frontmatter.gallery.map(i => createVNode($$GridImage, {
        children: createVNode($$Picture, {
          src: i
        })
      }))
    })
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
  }) : _createMdxContent();
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
