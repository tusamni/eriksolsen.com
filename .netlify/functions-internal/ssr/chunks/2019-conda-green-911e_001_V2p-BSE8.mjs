import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 5936,
  "height": 3966,
  "title": "Conda Green 911E",
  "description": "Conda Green 911E in Dripping Springs, TX",
  "date": "3/26/2019 8:30:00 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 55mm F1.8 ZA",
  "settingsfStop": "f/1.8",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/800",
  "settingsFocalLength": "55 mm"
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
const url = "src/content/images/shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_001.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_001.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-03-26-conda-green-911e/2019-conda-green-911e_001.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
