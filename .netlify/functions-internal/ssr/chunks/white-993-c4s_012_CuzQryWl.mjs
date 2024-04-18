import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 3e3,
  "title": "993 Interior",
  "description": "Looking through the rear glass of a Porsche 993",
  "date": "6/30/2023 5:14:32 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 35-150mm F2.0-F2.8 A058",
  "settingsfStop": "f/8",
  "settingsISO": "ISO 250",
  "settingsShutter": "1/100",
  "settingsFocalLength": "96 mm"
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
const url = "src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_012.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_012.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_012.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
