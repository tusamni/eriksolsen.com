import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 3916,
  "height": 5874,
  "title": "S2 Cab",
  "description": "Titanium Metallic 1990 Porsche 944 S2 Cabriolet 5-Speed shot in Austin, TX.",
  "date": "9/11/2023 7:45:51 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 35-150mm F2.0-F2.8 A058",
  "settingsfStop": "f/2.8",
  "settingsISO": "ISO 125",
  "settingsShutter": "1/100",
  "settingsFocalLength": "95 mm"
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
const url = "src/content/images/shoots/2023/2023-09-11-1990-porsche-944-s2-cabriolet/1990-porsche-944-s2-cabriolet_009.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-09-11-1990-porsche-944-s2-cabriolet/1990-porsche-944-s2-cabriolet_009.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-09-11-1990-porsche-944-s2-cabriolet/1990-porsche-944-s2-cabriolet_009.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
