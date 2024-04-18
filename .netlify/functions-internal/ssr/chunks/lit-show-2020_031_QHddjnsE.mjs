import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 1333,
  "height": 2e3,
  "title": "Red 912",
  "description": "Red 912 awaiting restoration.",
  "date": "2/27/2020 11:33:12 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "ZEISS Batis 1.8/85",
  "settingsfStop": "f/1.8",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/500",
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
const url = "src/content/images/shoots/2020/2020-02-27-lit-show-day-one/lit-show-2020_031.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-02-27-lit-show-day-one/lit-show-2020_031.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-02-27-lit-show-day-one/lit-show-2020_031.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
