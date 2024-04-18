import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["mg", "mga", "dripping springs", "texas"],
  "category": "Just For Fun",
  "brand": "MG",
  "date": "2022-09-15T00:00:00.000Z",
  "title": "White 1957 MG MGA",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2020/05/1966-jaguar-xke", "2020/05/chevrolet-impala-ss-convertible"],
  "images": {
    "hero": "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_016.jpg",
    "gallery": ["shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_001.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_002.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_003.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_004.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_005.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_006.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_007.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_008.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_009.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_010.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_011.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_012.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_013.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_014.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_015.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_016.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_017.jpg", "shoots/2022/2022-09-05-1957-mg-mga/1957-mg-mga_018.jpg"]
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
const url = "src/content/shoots/2022/09/1957-mg-mga.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1957-mg-mga.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1957-mg-mga.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
