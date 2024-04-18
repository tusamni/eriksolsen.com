import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 3e3,
  "height": 2e3,
  "title": "993 Interior",
  "description": "Wide shot of a 993 C4S interior",
  "date": "6/30/2023 6:17:51 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 20-40mm F2.8 A062",
  "settingsfStop": "f/5",
  "settingsISO": "ISO 160",
  "settingsShutter": "1/30",
  "settingsFocalLength": "23 mm"
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
const url = "src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_021.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_021.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-06-30-white-993-c4s/white-993-c4s_021.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
