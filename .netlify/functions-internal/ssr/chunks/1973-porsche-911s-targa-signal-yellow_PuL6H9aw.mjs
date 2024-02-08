import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", "911s", "dripping springs", "turbo"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2019-08-17T00:00:00.000Z",
  "featured": true,
  "title": "Signal Yellow 1973 911S Targa",
  "description": "A gorgeous 911S Targa I shot for a future auction on Bring a Trailer.",
  "location": {
    "text": "Dripping Springs, TX",
    "lat": 30.259390586566116,
    "lon": -98.0451141544943
  },
  "hero": "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg",
  "headline": "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg",
  "gallery": ["shoots/2019/2019-08-17-signal-yellow-911/911s-targa_001.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_002.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_003.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_004.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_005.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_006.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_007.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_008.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_009.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_010.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_011.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_012.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_014.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_015.jpg", "shoots/2019/2019-08-17-signal-yellow-911/911s-targa_016.jpg"],
  "related": ["2019/03/1971-conda-green-911e", "2018/05/1976-green-930-turbo", "2019/08/1977-porsche-911s-silver-metallic"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "send-the-signal",
    "text": "Send the Signal"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "send-the-signal",
      children: "Send the Signal"
    }), "\n", createVNode(_components.p, {
      children: "A friend decided to list this gorgeous 911S Targa. It was a car owned by a well known member of the early Porsche community who sadly passed away. My friend was able to purchase this car from his estate with the intention on finishing the car to the standars of the previous owner."
    }), "\n", createVNode(_components.p, {
      children: "What\u2019s not to love about this car: Pepita houndstooth and tan leather interior, targa, \u201CS\u201D and finished in Signal Yellow from the factory. It\u2019s an amazing assortment of options, one of my favorite cars in his collection."
    }), "\n", createVNode(_components.p, {
      children: "This car has yet to make it to Bring a Trailer though. It\u2019s still at the shop receiving the final touches. When it does get listed, it\u2019s going to the moon."
    }), "\n", createVNode($$Gallery, {
      children: createVNode($$Grid, {
        children: frontmatter.gallery.map(i => createVNode($$GridImage, {
          children: createVNode($$Picture, {
            src: i
          })
        }))
      })
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
