import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "Dodge Demon",
  "description": "Red Dodge Demon in Dripping Springs, TX",
  "date": "8/26/2018 7:24:21 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M2",
  "lens": "FE 55mm F1.8 ZA",
  "settingsfStop": "f/1.8",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/400",
  "settingsFocalLength": "55 mm"
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
const url = "src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_004.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
