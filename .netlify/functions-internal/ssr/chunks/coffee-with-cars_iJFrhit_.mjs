import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["coffee with cars", "dripping springs", "car show"],
  "category": "Car Show",
  "date": "2020-01-26T00:00:00.000Z",
  "title": "Coffee With Cars January 2020",
  "description": "Another visit to Coffee with Cars in Dripping Springs, TX",
  "location": {
    "lat": 30.208190225714013,
    "lon": -98.14140845278358,
    "text": "Greater Goods Coffee Austin,TX"
  },
  "related": ["2018/08/coffee-with-cars", "2019/05/coffee-with-cars", "2019/05/treaty-oak-car-show"],
  "hero": "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_002.jpg",
  "headline": "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_002.jpg",
  "gallery": ["shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_001.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_002.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_003.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_004.jpg"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "blue-bug",
    "text": "Blue Bug"
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
      id: "blue-bug",
      children: "Blue Bug"
    }), "\n", createVNode(_components.p, {
      children: "Another trip to the Hill Country for Coffee With Cars at Greater Goods Coffee. It was a light showing so I only snapped two photos. The 240SX made with green with envy, I\u2019ve always wanted an RB swapped Nissan."
    }), "\n", createVNode(_components.p, {
      children: "After the show I went to a friend\u2019s Porsche shop to shoot a few quick photos. I love the look of the Blue 912 photo, it makes the car almost look like a toy."
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
const url = "src/content/shoots/2020/01/coffee-with-cars.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/01/coffee-with-cars.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/01/coffee-with-cars.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
