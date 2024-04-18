import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 3984,
  "height": 5976,
  "title": "LP 700-4",
  "description": "Lamborghini Aventador LP 700-4 in Dripping Springs, TX.",
  "date": "8/31/2022 5:34:59 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 24-70mm F2.8 GM",
  "settingsfStop": "f/2.8",
  "settingsISO": "ISO 400",
  "settingsShutter": "1/80",
  "settingsFocalLength": "70 mm"
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
const url = "src/content/images/shoots/2022/2022-08-31-2014-lamborghini-aventador-lp700-4/2014-lamborghini-aventador-lp700-4_006.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-08-31-2014-lamborghini-aventador-lp700-4/2014-lamborghini-aventador-lp700-4_006.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-08-31-2014-lamborghini-aventador-lp700-4/2014-lamborghini-aventador-lp700-4_006.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
