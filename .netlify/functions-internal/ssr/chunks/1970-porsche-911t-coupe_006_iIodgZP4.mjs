import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 6e3,
  "height": 4e3,
  "title": "911T",
  "description": "Engine bay of a White 1970 Porsche 911T Coupe with a black interior shot in Austin, TX.",
  "date": "1/12/2024 9:20:08 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 35-150mm F2.0-F2.8 A058",
  "settingsfStop": "f/7.1",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/20",
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
const url = "src/content/images/shoots/2024/2024-01-12-1970-porsche-911t-coupe/1970-porsche-911t-coupe_006.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2024/2024-01-12-1970-porsche-911t-coupe/1970-porsche-911t-coupe_006.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2024/2024-01-12-1970-porsche-911t-coupe/1970-porsche-911t-coupe_006.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
