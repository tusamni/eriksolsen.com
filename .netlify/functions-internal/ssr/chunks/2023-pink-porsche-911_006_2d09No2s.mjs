import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 5800,
  "height": 3750,
  "title": "Pink 911",
  "description": "A custom painted 911 in Austin, TX.",
  "date": "5/26/2023 6:04:18 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "24-70mm F2.8 DG DN | Art 019",
  "settingsfStop": "f/9.0",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/60",
  "settingsFocalLength": "41 mm"
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
const url = "src/content/images/shoots/2023/2023-05-26-pink-911/2023-pink-porsche-911_006.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-05-26-pink-911/2023-pink-porsche-911_006.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-05-26-pink-911/2023-pink-porsche-911_006.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
