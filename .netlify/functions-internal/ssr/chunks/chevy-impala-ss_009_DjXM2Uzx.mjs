import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 2e3,
  "height": 3e3,
  "title": "1964 Chevrolet Impala SS",
  "description": "Blue Impala SS Convertible in Dripping Springs, TX",
  "date": "3/14/2020 9:00:00 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "ZEISS Batis 1.8/85",
  "settingsfStop": "f/1.8",
  "settingsISO": "ISO 100",
  "settingsShutter": "1/800",
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
const url = "src/content/images/shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_009.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_009.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_009.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
