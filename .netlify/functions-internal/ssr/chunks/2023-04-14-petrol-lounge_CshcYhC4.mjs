import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["petrol lounge", "austin"],
  "category": "Miscellaneous",
  "date": "2023-04-14T00:00:00.000Z",
  "title": "Petrol Lounge Car Storage",
  "description": "After a Tesla Roadster customer shoot I get to walk around the jaw dropping cars stored at Petrol Lounge in Austin, TX.",
  "related": ["2022/02/lit-show-day-two", "2022/02/lit-show-day-three", "2022/02/lit-show-day-four"],
  "images": {
    "hero": "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_001.jpg",
    "gallery": ["shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_001.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_002.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_003.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_004.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_005.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_006.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_007.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_008.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_009.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_010.jpg", "shoots/2023/2023-04-14-petrol-lounge/2023-petrol-lounge_011.jpg"]
  }
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
const url = "src/content/shoots/2023/04/2023-04-14-petrol-lounge.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/04/2023-04-14-petrol-lounge.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/04/2023-04-14-petrol-lounge.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
