import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["chevrolet", "corvette", "stingray", "dripping springs", "texas"],
  "category": "Just For Fun",
  "brand": "Chevrolet",
  "date": "2022-09-01T00:00:00.000Z",
  "title": "1982 Chevrolet Corvette Stingray",
  "description": "Pop-up headlights and fender arches for days. I didn't expect much, but I thorougly enjoyed this Stingray.",
  "location": {
    "text": "Dripping Springs, TX"
  },
  "related": ["2020/05/1966-jaguar-xke", "2020/05/chevrolet-impala-ss-convertible"],
  "images": {
    "hero": "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_015.jpg",
    "gallery": ["shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_001.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_002.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_003.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_004.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_005.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_006.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_007.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_008.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_009.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_010.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_011.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_012.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_013.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_014.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_015.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_016.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_017.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_018.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_019.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_020.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_021.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_022.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_023.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_024.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_025.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_026.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_027.jpg", "shoots/2022/2022-09-01-1982-chevrolet-corvette/1982-chevrolet-corvette_028.jpg"]
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
const url = "src/content/shoots/2022/09/1982-chevrolet-corvette.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1982-chevrolet-corvette.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/09/1982-chevrolet-corvette.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
