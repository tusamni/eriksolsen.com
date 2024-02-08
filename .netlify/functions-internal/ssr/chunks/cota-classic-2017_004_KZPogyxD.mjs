import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "911 Mobil Livery",
  "description": "White 911 race car with a Mobil 1 livery.",
  "date": "11/3/2017 12:50:23 PM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M2",
  "lens": "ZEISS Batis 2/25",
  "settingsfStop": "f/8",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/60",
  "settingsFocalLength": "25 mm"
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
const url = "src/content/images/shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2017/2017-11-03-cota-classic/cota-classic-2017_004.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
