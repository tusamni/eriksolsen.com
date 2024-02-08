import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "Camo H1",
  "description": "The rear end of an H1.",
  "date": "5/27/2019 11:43:46 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 24-105mm F4 G OSS",
  "settingsfStop": "f/5.6",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/160",
  "settingsFocalLength": "60 mm"
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
const url = "src/content/images/shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
