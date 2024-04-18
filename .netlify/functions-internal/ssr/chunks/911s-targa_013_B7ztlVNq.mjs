import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "911S Interior",
  "description": "Signal Yellow 911S Targa with brown leather interior",
  "date": "8/17/2019 7:28:35 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "14mm F1.8 DG HSM | Art 017",
  "settingsfStop": "f/1.8",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/200",
  "settingsFocalLength": "14 mm"
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
const url = "src/content/images/shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-08-17-signal-yellow-911/911s-targa_013.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
