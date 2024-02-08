import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { $ as $$Grid, a as $$GridImage, b as $$Gallery } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["coffee with cars", "dripping springs", "greater goods coffee"],
  "category": "Car Show",
  "date": "2018-08-26T00:00:00.000Z",
  "title": "Coffee With Cars August 2018",
  "description": "After picking up a new Sony Zeiss 55mm f/1.8 lens, I head to the monthly Coffee With Cars meetup in Dripping Springs, TX.",
  "location": {
    "lat": 30.208190225714013,
    "lon": -98.14140845278358,
    "text": "Dripping Springs, TX",
    "place": "Greater Goods Coffee Austin,TX"
  },
  "hero": "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.jpg",
  "headline": "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.jpg",
  "gallery": {
    "gallery01": ["shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_005.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_006.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_007.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_008.jpg"],
    "gallery02": ["shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_001.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_002.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_003.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_009.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_010.jpg", "shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_011.jpg"]
  },
  "related": ["2019/05/coffee-with-cars", "2020/01/coffee-with-cars"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "demon-in-the-details",
    "text": "Demon in the Details"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode($$Gallery, {
    children: [createVNode($$Grid, {
      children: frontmatter.gallery.gallery01.map(i => createVNode($$GridImage, {
        children: createVNode($$Picture, {
          src: i
        })
      }))
    }), createVNode(_components.h2, {
      id: "demon-in-the-details",
      children: "Demon in the Details"
    }), createVNode(_components.p, {
      children: "There were plenty of interesting cars there, but this was right around the time of the Demon release. I was just blown away with how ridiculous this car was. I can\u2019t even imagine trying to put down 800hp on the street, even with road legal slicks."
    }), createVNode(_components.p, {
      children: "The demon really is in all the details. It\u2019s a single purpose car and Dodge makes no bones about it. I\u2019m in love."
    }), createVNode($$Grid, {
      children: frontmatter.gallery.gallery02.map(i => createVNode($$GridImage, {
        children: createVNode($$Picture, {
          src: i
        })
      }))
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
const url = "src/content/shoots/2018/08/coffee-with-cars.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/08/coffee-with-cars.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2018/08/coffee-with-cars.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
