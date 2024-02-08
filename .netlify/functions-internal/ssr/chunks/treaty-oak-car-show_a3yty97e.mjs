import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["treaty oak", "dripping springs", "rod run"],
  "category": "Car Show",
  "date": "2019-05-27T00:00:00.000Z",
  "title": "2019 Treaty Oak Rod Run Car Show",
  "description": "Each year a local Dripping Springs distillery puts on a classic car show. I profess to not know much about classic American cars, but it's a good excuse to snag some photos.",
  "location": {
    "lat": 30.24667250343753,
    "lon": -98.05479711932648,
    "text": "Treaty Oak Distillery Dripping Springs, TX"
  },
  "hero": "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg",
  "headline": "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg",
  "gallery": ["shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_001.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_002.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_004.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_005.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_007.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_008.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_009.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_010.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_011.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_012.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_013.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_014.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_015.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_016.jpg"],
  "related": ["2018/08/coffee-with-cars", "2019/05/coffee-with-cars", "2021/06/hill-country-pca-event"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "distill",
    "text": "Distill"
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
      id: "distill",
      children: "Distill"
    }), "\n", createVNode(_components.p, {
      children: "Each year, Treaty Oak Distillery puts on a car show called the Rod Run. I\u2019ll be honest, I\u2019m not terribly knowledgeable about classic American cars. But why wouldn\u2019t I go and listen to a bunch of large displacement V8\u2019s rumbling around the hill country?"
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
const url = "src/content/shoots/2019/05/treaty-oak-car-show.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/treaty-oak-car-show.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/05/treaty-oak-car-show.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
