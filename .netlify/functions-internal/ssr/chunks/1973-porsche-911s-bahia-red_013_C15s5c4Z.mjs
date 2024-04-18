import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 4e3,
  "height": 2667,
  "title": "Bahia Red",
  "description": "Interior of a 1973 Bahia Red 911S.",
  "date": "10/24/2021 6:41:59 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "ZEISS Batis 1.8/85",
  "settingsfStop": "f/2",
  "settingsISO": "ISO 1250",
  "settingsShutter": "1/100",
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
const url = "src/content/images/shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_013.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_013.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2021/2021-10-24-bahia-red-porsche-911s/1973-porsche-911s-bahia-red_013.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
