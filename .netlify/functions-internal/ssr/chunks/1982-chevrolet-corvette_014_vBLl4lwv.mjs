import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 4e3,
  "height": 6e3,
  "title": "C3 Corvette",
  "description": "1983 Chevrolet Corvette in Dripping Springs, TX.",
  "date": "9/1/2022 6:50:27 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "FE 70-200mm F4 G OSS",
  "settingsfStop": "f/4.5",
  "settingsISO": "ISO 250",
  "settingsShutter": "1/125",
  "settingsFocalLength": "114 mm"
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
const url = "src/content/images/shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_014.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_014.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_014.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
