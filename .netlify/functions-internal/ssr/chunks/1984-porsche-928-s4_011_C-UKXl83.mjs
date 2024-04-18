import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "width": 4e3,
  "height": 6e3,
  "title": "928 S4",
  "description": "1984 Porsche 928 S4 shot in Austin, TX.",
  "date": "9/15/2022 5:32:05 AM",
  "cameraMake": "Sony",
  "cameraModel": "ILCE-7M3",
  "lens": "50mm F1.4 DG HSM | Art 018",
  "settingsfStop": "f/1.6",
  "settingsISO": "ISO 50",
  "settingsShutter": "1/5",
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
const url = "src/content/images/shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_011.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_011.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/images/shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_011.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
