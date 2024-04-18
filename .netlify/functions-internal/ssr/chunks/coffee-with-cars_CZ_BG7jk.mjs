import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["coffee with cars", "dripping springs", "car show"],
  "category": "Car Show",
  "date": "2020-01-26T00:00:00.000Z",
  "title": "Coffee With Cars January 2020",
  "description": "Another visit to Coffee with Cars and a Porsche restoration shop in Dripping Springs, TX.",
  "location": {
    "lat": 30.208190225714013,
    "lon": -98.14140845278358,
    "text": "Austin,TX"
  },
  "related": ["2018/08/coffee-with-cars", "2019/05/coffee-with-cars", "2019/05/treaty-oak-car-show"],
  "images": {
    "hero": "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_002.jpg",
    "gallery": ["shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_001.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_002.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_003.jpg", "shoots/2020/2020-01-26-coffee-with-cars/coffee-with-cars-2020_004.jpg"]
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
      children: "Another trip to the Hill Country for Coffee With Cars at Greater Goods Coffee. It was a light showing so I only snapped two photos. The 240SX brought back great memories from my days of modifying imports. I\u2019ve always wanted an RB swapped Nissan."
    }), "\n", createVNode(_components.p, {
      children: "After the show I went to a friend\u2019s Porsche shop to shoot a few quick photos. I love the look of the Blue 912 photo, it makes the car almost look like a toy."
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
