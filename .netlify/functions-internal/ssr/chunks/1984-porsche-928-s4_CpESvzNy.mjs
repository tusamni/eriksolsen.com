import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", 928, "s4", "dripping springs", "texas"],
  "category": "Just For Fun",
  "brand": "Porsche",
  "date": "2022-09-15T00:00:00.000Z",
  "title": "1984 Porsche 928 S4",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2020/05/1966-jaguar-xke", "2020/05/chevrolet-impala-ss-convertible"],
  "images": {
    "hero": "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_001.jpg",
    "gallery": ["shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_001.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_002.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_003.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_004.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_005.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_006.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_007.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_008.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_009.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_010.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_011.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_012.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_013.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_014.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_015.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_016.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_017.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_018.jpg", "shoots/2022/2022-09-15-1984-porsche-928-s4/1984-porsche-928-s4_019.jpg"]
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
const url = "src/content/shoots/2022/09/1984-porsche-928-s4.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1984-porsche-928-s4.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1984-porsche-928-s4.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
