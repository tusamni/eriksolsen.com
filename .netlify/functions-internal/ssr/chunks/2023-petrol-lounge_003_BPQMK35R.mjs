import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 6e3,
  "height": 4e3,
  "title": "RS200 Evo",
  "description": "Ford RS200 Evolution at Petrol Lounge in Austin, TX.",
  "date": "4/14/2023 11:35:49 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "24-70mm F2.8 DG DN | Art 019",
  "settingsfStop": "f/2.8",
  "settingsISO": "ISO 500",
  "settingsShutter": "1/30",
  "settingsFocalLength": "30.4 mm"
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
const url = "src/content/images/shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_003.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_003.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_003.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
