import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["tesla", "roadster", "very orange metallic", "austin", "texas"],
  "category": "Just For Fun",
  "brand": "Tesla",
  "date": "2023-04-14T00:00:00.000Z",
  "title": "2010 Very Orange Metallic Tesla Roadster",
  "location": {
    "text": "Austin, TX"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_002.jpg",
    "gallery": ["shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_001.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_002.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_003.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_004.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_005.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_006.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_007.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_008.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_009.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_010.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_011.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_012.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_013.jpg", "shoots/2023/2023-04-14-2010-tesla-roadster/2010-tesla-roadster_014.jpg"]
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
const url = "src/content/shoots/2023/04/2023-04-14-2010-tesla-roadster.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/04/2023-04-14-2010-tesla-roadster.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/04/2023-04-14-2010-tesla-roadster.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
