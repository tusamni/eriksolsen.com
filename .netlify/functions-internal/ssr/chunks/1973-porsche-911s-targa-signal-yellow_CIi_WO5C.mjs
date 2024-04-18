import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "911s", "dripping springs", "turbo"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2019-08-17T00:00:00.000Z",
  "featured": true,
  "title": "Signal Yellow 1973 911S Targa",
  "description": "A storied Signal Yellow 911S Targa gets ready for auction. Signal Yellow, Pepita and Brown leather, this one should get some attention.",
  "location": {
    "text": "Dripping Springs, TX",
    "lat": 30.259390586566116,
    "lon": -98.0451141544943
  },
  "related": ["2019/03/1971-conda-green-911e", "2018/05/1976-green-930-turbo", "2019/08/1977-porsche-911s-silver-metallic"],
  "images": {
    "hero": "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg",
    "gallery": ["shoots/2019/2019-08-17-signal-yellow-911/911s-targa_001.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_002.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_003.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_004.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_005.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_006.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_007.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_008.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_009.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_010.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_011.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_012.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_014.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_015.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg"]
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
      children: "A friend decided to list this gorgeous 911S Targa. It was a car owned by a well known member of the early Porsche community who sadly passed away. My friend was able to purchase this car from his estate with the intention on finishing the car to the standars of the previous owner."
    }), "\n", createVNode(_components.p, {
      children: "What\u2019s not to love about this car: Pepita houndstooth and tan leather interior, targa, \u201CS\u201D and finished in Signal Yellow from the factory. It\u2019s an amazing assortment of options, one of my favorite cars in his collection."
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
const url = "src/content/shoots/2019/08/1973-porsche-911s-targa-signal-yellow.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/08/1973-porsche-911s-targa-signal-yellow.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/08/1973-porsche-911s-targa-signal-yellow.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
