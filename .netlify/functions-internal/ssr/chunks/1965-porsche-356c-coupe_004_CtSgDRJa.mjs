import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 5846,
  "height": 3897,
  "title": "356C",
  "description": "Red on Black 1965 Porsche 356C Coupe shot in Austin, TX.",
  "date": "7/27/2023 4:48:36 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 35-150mm F2.0-F2.8 A058",
  "settingsfStop": "f/3.2",
  "settingsISO": "ISO 250",
  "settingsShutter": "1/160",
  "settingsFocalLength": "150 mm"
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
const url = "src/content/images/shoots/2023/2023-07-27-1965-porsche-356c-coupe/1965-porsche-356c-coupe_004.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-07-27-1965-porsche-356c-coupe/1965-porsche-356c-coupe_004.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-07-27-1965-porsche-356c-coupe/1965-porsche-356c-coupe_004.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
