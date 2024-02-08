import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["lit show", "porsche", "los angeles"],
  "category": "Car Show",
  "date": "2020-03-01T00:00:00.000Z",
  "title": "LIT Show 2020 Part 4",
  "description": "We finish off our trip with a visit to the incredible Petersen Museum to see an original 550 Spyder.",
  "location": {
    "lat": 34.06200319498317,
    "lon": -118.36133361132492,
    "text": "Petersen Automotive Museum Los Angeles, CA"
  },
  "hero": "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_020.jpg",
  "headline": "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_020.jpg",
  "gallery": ["shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_001.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_002.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_003.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_004.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_005.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_006.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_007.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_008.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_009.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_010.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_011.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_012.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_013.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_014.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_015.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_016.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_017.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_018.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_019.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_020.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_021.jpg", "shoots/2020/2020-03-01-lit-show-day-four/lit-show-2020_022.jpg"],
  "related": ["2020/02/lit-show-day-one", "2020/02/lit-show-day-two", "2020/02/lit-show-day-three"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "museum-time",
    "text": "Museum Time"
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
      id: "museum-time",
      children: "Museum Time"
    }), "\n", createVNode(_components.p, {
      children: ["As our trip comes to a close, we made one final trip out to the ", createVNode(_components.a, {
        href: "https://www.petersen.org/",
        children: "Petersen Museum"
      }), ". The museum bills itself as \u201Cone of the largest automotive collections in the world.\u201D They have a rotating collection and what you\u2019ll see differs year to year. During our trip they were featuring two major exhibitions, \u201CSupercars: A Century of Spectacle and Speed\u201D and \u201CHollywood Dream Machines: Vehicles of Science Fiction and Fantasy\u201D."]
    }), "\n", createVNode(_components.p, {
      children: "The supercars exhibit was fabulous. Getting to see a GT40 Mk III in person was amazing. Having watched plenty of YouTube shorts on the racing history of the Ford GT, it was fun to finally stand next to one."
    }), "\n", createVNode(_components.p, {
      children: "That said, the main attraction was the 1956 Porsche 550/1550 RS Spyder. To realize that only 90 of these were made, some were wrecked racing, is pretty chilling. Hagerty claims to know the location of about 80% of the original run, so there\u2019s still close to 70 in the wild."
    }), "\n", createVNode(_components.p, {
      children: "It was a nice way to end the trip. I saw so many incredible current model Porsches on this trip, yet we ended seeing one of the earliest prouction Porsches built. It\u2019s a true testament to the longevity of the brand and the passion that still exists in the community today."
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
const url = "src/content/shoots/2020/03/lit-show-day-four.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/03/lit-show-day-four.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/03/lit-show-day-four.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
