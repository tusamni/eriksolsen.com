import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 5903,
  "height": 3935,
  "title": 2002,
  "description": "Gauge cluster on an Orange 1976 BMW 2002 2.2L 5-Speed shot in Blanco, TX.",
  "date": "11/4/2023 11:20:22 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "E 20-40mm F2.8 A062",
  "settingsfStop": "f/3.5",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/100",
  "settingsFocalLength": "40 mm"
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
const url = "src/content/images/shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_020.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_020.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-11-04-1976-bmw-2002/1976-bmw-2002_020.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
