import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "Dodge Demon",
  "description": "Rear Wheel and Tire on a Dodge Demon",
  "date": "8/26/2018 7:43:44 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M2",
  "lens": "FE 16-35mm F4 ZA OSS",
  "settingsfStop": "f/4",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/80",
  "settingsFocalLength": "16 mm"
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
const url = "src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_009.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_009.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2018/2018-08-26-coffee-with-cars/coffee-with-cars-2018_009.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
