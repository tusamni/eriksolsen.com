import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 3840,
  "height": 2560,
  "title": "Light Red",
  "description": "Light red interior on a 1977 Porsche 911S.",
  "date": "08/19/2019 9:05:00 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "50mm F1.4 DG HSM | Art 018",
  "settingsfStop": "f/1.4",
  "settingsISO": "ISO 800",
  "settingsShutter": "1/50",
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
const url = "src/content/images/shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_009.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_009.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2019/2019-08-19-silver-porsche-911s/1977-porsche-911s-silver_009.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
