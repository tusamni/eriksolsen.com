import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 6e3,
  "height": 4e3,
  "title": "XLR-V",
  "description": "2006 Black Raven Cadillac XLR-V with Ebony interior in Corpus Christi, TX.",
  "date": "3/3/2023 8:04:56 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "85mm F1.4 DG DN | Art 020",
  "settingsfStop": "f/1.6",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/8000",
  "settingsFocalLength": "85 mm"
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
const url = "src/content/images/shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_003.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_003.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2023/2023-03-04-2006-cadillac-xlr-v/2006-cadillac-xlr-v_003.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
