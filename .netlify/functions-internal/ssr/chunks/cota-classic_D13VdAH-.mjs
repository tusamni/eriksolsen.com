import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["US vintage nationals", "circuit of the americas"],
  "category": "Car Show",
  "date": "2017-11-03T00:00:00.000Z",
  "title": "2017 U.S. Vintage Nationals at COTA",
  "description": 'I get an "in-the-pits" invitation to the U.S. Vintage National Championships at Circuit of the Americas in Austin, TX.',
  "location": {
    "text": "Austin, TX",
    "lat": 30.135106855382137,
    "lon": -97.63713735737554,
    "place": "Circuit of the Americas Austin, TX"
  },
  "related": ["2021/06/hill-country-pca-event", "2019/03/porsches-at-the-shop"],
  "images": {
    "columns": "grid-cols-3",
    "hero": "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.jpg",
    "gallery": ["shoots/2017/2017-11-03-cota-classic/cota-classic-2017_001.jpg", "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_002.jpg", "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_003.jpg", "shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.jpg"]
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
  return createVNode(_components.p, {
    children: "I\u2019m more than a bit embarassed to say I\u2019ve lived in Austin for years and never made it out to COTA. That all changed with an invite to the 2017 US Vintage Nationals. It was awesome to walk around the pits and see vintage F-1 cars idling and pit crews working fervently to get everything up and running."
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
const url = "src/content/shoots/2017/11/cota-classic.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2017/11/cota-classic.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2017/11/cota-classic.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
