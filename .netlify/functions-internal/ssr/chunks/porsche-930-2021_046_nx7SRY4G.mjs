import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 1333,
  "title": "930 Turbo Flachbau",
  "description": "930 Turbo Flachbau with Lipstick Red interior.",
  "date": "6/23/2021 7:02:50 PM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "50mm F1.4 DG HSM | Art 018",
  "settingsfStop": "f/1.4",
  "settingsISO": "ISO 500",
  "settingsShutter": "1/320",
  "settingsFocalLength": "50 mm"
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
const url = "src/content/images/shoots/2021/2021-06-23-porsche-930/porsche-930-2021_046.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2021/2021-06-23-porsche-930/porsche-930-2021_046.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2021/2021-06-23-porsche-930/porsche-930-2021_046.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
