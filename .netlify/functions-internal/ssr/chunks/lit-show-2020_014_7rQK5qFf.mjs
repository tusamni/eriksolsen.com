import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "911R",
  "description": "A silver Porsche 911R parked outside a hotel in LA.",
  "date": "2/29/2020 11:57:25 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "ZEISS Batis 2/40 CF",
  "settingsfStop": "f/2",
  "settingsISO": "ISO 160",
  "settingsShutter": "1/40",
  "settingsFocalLength": "40 mm"
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
const url = "src/content/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-02-29-lit-show-day-three/lit-show-2020_014.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
