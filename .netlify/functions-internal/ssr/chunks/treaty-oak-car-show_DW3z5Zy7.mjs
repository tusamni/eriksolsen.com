import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
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
    "text": "Dripping Springs, TX"
  },
  "related": ["2018/08/coffee-with-cars", "2019/05/coffee-with-cars", "2021/06/hill-country-pca-event"],
  "images": {
    "hero": "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg",
    "gallery": ["shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_001.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_002.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_004.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_005.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_007.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_008.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_009.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_010.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_011.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_012.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_013.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_014.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_015.jpg", "shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_016.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
  }) : _createMdxContent();
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
