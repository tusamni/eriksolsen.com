import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["ice metallic green", "porsche", "930 turbo"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2018-05-08T00:00:00.000Z",
  "title": "1976 Ice Metallic Green 930 Turbo",
  "description": "My first shoot for Bring a Trailer is a pristine 930 Turbo painted in a glorious shade of Ice Metallic Green that sells for $165,000!",
  "location": {
    "text": "Dripping Springs, TX",
    "lat": 30.22611905489276,
    "lon": -97.94989092086459,
    "place": "Mount Olive Lutheran Church Austin, TX"
  },
  "related": ["2019/08/1973-porsche-911s-targa-signal-yellow", "2019/03/1971-conda-green-911e", "2021/10/1973-bahia-red-porsche-911s"],
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1976-porsche-930-turbo-carrera-5/",
    "sold": true,
    "price": 165e3
  },
  "images": {
    "hero": "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003.jpg",
    "gallery": ["shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_001.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_002.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_003.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_004.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_005.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_006.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_007.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_009.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_010.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_011.jpg", "shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_012.jpg"]
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
const url = "src/content/shoots/2018/05/1976-green-930-turbo.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/05/1976-green-930-turbo.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/05/1976-green-930-turbo.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
