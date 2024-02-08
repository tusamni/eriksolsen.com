import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { $ as $$Grid, a as $$GridImage, b as $$Gallery } from './GridImage_hXR6kz70.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["blanco", "jaguar", "xke", "auction", "bring a trailer"],
  "category": "Auction",
  "date": "2020-05-03T00:00:00.000Z",
  "title": "1964 Chevrolet Impala SS",
  "description": "Test subtitle, please replace this!",
  "related": ["2020/05/1966-jaguar-xke", "2019/05/treaty-oak-car-show"],
  "hero": "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_004.jpg",
  "headline": "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_005.jpg",
  "gallery": ["shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_001.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_002.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_003.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_004.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_005.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_006.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_007.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_008.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_009.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_010.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_011.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_012.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_013.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_014.jpg", "shoots/2020/2020-03-14-impala-ss/chevy-impala-ss_015.jpg"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Gallery, {
    children: createVNode($$Grid, {
      children: frontmatter.gallery.map(i => createVNode($$GridImage, {
        children: createVNode($$Picture, {
          src: i
        })
      }))
    })
  });
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
const url = "src/content/shoots/2020/05/chevrolet-impala-ss-convertible.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/05/chevrolet-impala-ss-convertible.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/05/chevrolet-impala-ss-convertible.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
