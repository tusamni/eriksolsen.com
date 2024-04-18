import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "Whale Tail",
  "description": "930 Turbo Whale Tail",
  "date": "5/8/2018 6:37:35 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M2",
  "lens": "FE 35mm F2.8 ZA",
  "settingsfStop": "f/4.5",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/60",
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
const url = "src/content/images/shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-05-08-ice-metallic-green-930/porsche-930-2018_008.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
