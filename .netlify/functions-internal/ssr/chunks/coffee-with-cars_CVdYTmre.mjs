import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["coffee with cars", "dripping springs", "greater goods coffee"],
  "category": "Car Show",
  "date": "2019-05-26T00:00:00.000Z",
  "title": "Coffee With Cars in Dripping Springs, TX",
  "description": "Another lens swap means another trip to the local Coffee With Cars meetup in Dripping Springs, TX to test out my new Sony 24-105 G.",
  "location": {
    "lat": 30.208190225714013,
    "lon": -98.14140845278358,
    "text": "Dripping Springs, TX",
    "place": "Greater Goods Coffee Austin,TX"
  },
  "related": ["2018/08/coffee-with-cars", "2020/01/coffee-with-cars"],
  "images": {
    "hero": "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_011.jpg",
    "gallery": ["shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_001.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_002.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_003.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_004.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_005.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_006.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_007.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_008.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_009.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_010.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_011.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_012.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_013.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_014.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_015.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_016.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_017.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_018.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_019.jpg", "shoots/2019/2019-05-26-coffee-with-cars/coffee-with-cars-2019_020.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Every month, ", createVNode(_components.a, {
        href: "https://greatergoodsroasting.com/",
        children: "Greater Goods"
      }), " hosts a car show in Dripping Springs, TX. It\u2019s a great mix of vehicles, some new, some old, some trucks."]
    }), "\n", createVNode(_components.p, {
      children: "The 24-105mm Sony for full frame E-mount lenses is such a great and versatile lens for car photography. If you\u2019re okay with the limited, maximum aperture of f/4, it\u2019s the perfect zoom. 24mm is just enough to grab nice interiors, 105mm gives you great depth of field, even at f/4. If I had to stick one one lens for car photography for the rest of my life, it\u2019s the 24-105 for sure."
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
const url = "src/content/shoots/2019/05/coffee-with-cars.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/coffee-with-cars.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/coffee-with-cars.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
