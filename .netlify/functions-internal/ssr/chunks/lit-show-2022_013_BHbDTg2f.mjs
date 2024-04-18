import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 1333,
  "height": 2e3,
  "title": "Velocity",
  "description": "Velocity stacks on a 911 engine",
  "date": "2/26/2022 2:36:00 PM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 35mm F1.4 GM",
  "settingsfStop": "f/1.4",
  "settingsISO": "ISO 2500",
  "settingsShutter": "1/40",
  "settingsFocalLength": "35 mm"
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
const url = "src/content/images/shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_013.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_013.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-26-lit-show-day-three/lit-show-2022_013.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
