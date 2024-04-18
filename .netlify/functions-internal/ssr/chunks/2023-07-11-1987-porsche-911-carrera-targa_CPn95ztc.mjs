import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["porsche", 911, "carrera", "targa", "austin", "texas"],
  "category": "Auction",
  "brand": "Porsche",
  "date": "2023-07-11T00:00:00.000Z",
  "title": "Marble Grey 1987 Porsche 911 Carrera Targa",
  "location": {
    "text": "Austin, TX"
  },
  "auction": {
    "site": "Bring a Trailer",
    "url": "https://bringatrailer.com/listing/1986-porsche-911-carrera-targa-63/",
    "sold": true,
    "price": 105e3,
    "logo": "bring-a-trailer"
  },
  "related": ["2018/05/1976-green-930-turbo", "2021/06/1989-porsche-930-turbo-flachbau"],
  "images": {
    "hero": "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_017.jpg",
    "gallery": ["shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_001.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_002.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_003.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_004.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_005.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_006.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_007.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_008.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_009.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_010.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_011.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_012.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_013.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_014.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_015.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_016.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_017.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_018.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_019.jpg", "shoots/2023/2023-07-11-1987-porsche-911-carrera-targa/1987-porsche-911-carrera-targa_020.jpg"]
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
const url = "src/content/shoots/2023/07/2023-07-11-1987-porsche-911-carrera-targa.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/07/2023-07-11-1987-porsche-911-carrera-targa.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2023/07/2023-07-11-1987-porsche-911-carrera-targa.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
