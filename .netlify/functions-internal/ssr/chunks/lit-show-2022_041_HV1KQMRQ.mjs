import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 1333,
  "height": 2e3,
  "title": "Bizzarrini A3/C",
  "description": "A LeMans winning A3/C owned by Bruce Meyer",
  "date": "2/27/2022 4:29:38 PM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 35mm F1.4 GM",
  "settingsfStop": "f/1.4",
  "settingsISO": "ISO 250",
  "settingsShutter": "1/40",
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
const url = "src/content/images/shoots/2022/2022-02-27-lit-show-day-four/lit-show-2022_041.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-27-lit-show-day-four/lit-show-2022_041.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-02-27-lit-show-day-four/lit-show-2022_041.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
