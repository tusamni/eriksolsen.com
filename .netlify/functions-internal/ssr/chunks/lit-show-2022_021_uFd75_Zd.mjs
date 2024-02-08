import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "Cayman GT3",
  "description": "GT3 wheels on a Cayman",
  "date": "2/24/2022 11:30:21 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 85mm F1.4 GM",
  "settingsfStop": "f/1.4",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/1600",
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
const url = "src/content/images/shoots/2022/2022-02-24-lit-show-day-one/lit-show-2022_021.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-24-lit-show-day-one/lit-show-2022_021.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-24-lit-show-day-one/lit-show-2022_021.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
