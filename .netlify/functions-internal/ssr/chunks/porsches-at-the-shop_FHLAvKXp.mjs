import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["dripping springs", "porsche"],
  "category": "Miscellaneous",
  "make": "Porsche",
  "date": "2019-03-23T00:00:00.000Z",
  "title": "Porsches at the Shop",
  "description": "With my upgrade from a single Zeiss lens to multiple Zeiss lenses it's time to take a trip to a nearby Porsche restoration shop in Dripping Springs, TX.",
  "hero": "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg",
  "headline": "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg",
  "gallery": ["shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_001.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_002.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_003.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_004.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_005.jpg", "shoots/2019/2019-03-23-porsches-at-the-shop/2019-porsches-at-the-shop_006.jpg"],
  "related": ["2019/12/shop-shoot", "2021/06/hill-country-pca-event"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "more-zeiss",
    "text": "More Zeiss"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "more-zeiss",
      children: "More Zeiss"
    }), "\n", createVNode(_components.p, {
      children: ["Armed with my new ", createVNode(_components.a, {
        href: "/blog/car-photography-update",
        children: "Sony Zeiss 55mm f/1.8 and a Sony Zeiss 16-35mm sf/4"
      }), ", I headed over to a friend\u2019s shop."]
    }), "\n", createVNode(_components.p, {
      children: "Up to this point I had been shooting with a 35mm Sony Zeiss f/2.8. I love that little lens, but it\u2019s not a great all around car photography lens. Since I wanted to continue the Sony Zeiss theme, I snagged their 16-35mm and 55mm. I figured the 55mm would give me a little longer reach."
    }), "\n", createVNode(_components.p, {
      children: "In hindsight, it wasn\u2019t enough. I really needed another lens around the 85-100mm mark. But the Sony Zeiss series will always hold a special place in my heart."
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
const url = "src/content/shoots/2019/03/porsches-at-the-shop.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/porsches-at-the-shop.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/03/porsches-at-the-shop.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
