import { _ as __astro_tag_component__, w as Fragment, v as createVNode } from './astro_Dt0nfyJ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DVYIZeAj.mjs';
import 'clsx';

const frontmatter = {
  "tags": ["backdraft", "cobra", "lakeway", "texas", "bring a trailer"],
  "category": "Auction",
  "brand": "Backdraft",
  "date": "2022-11-30T00:00:00.000Z",
  "featured": true,
  "title": "Gray 1965 Backdraft Cobra",
  "description": "I finally get to meet my hero. I've wanted a Backdraft for as long as I've been shooting cars, and what a specimen!",
  "location": {
    "text": "Lakeway, TX",
    "lat": 30.370575114029656,
    "lon": -97.99249304673353
  },
  "auction": {
    "site": "Bring a Trailer",
    "logo": "bring-a-trailer",
    "url": "https://bringatrailer.com/listing/1965-shelby-cobra-128/",
    "sold": true,
    "price": 80500
  },
  "related": ["2020/05/1966-jaguar-xke", "2020/05/chevrolet-impala-ss-convertible"],
  "images": {
    "hero": "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_008.jpg",
    "gallery": ["shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_001.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_002.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_003.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_004.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_005.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_006.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_007.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_008.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_009.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_010.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_011.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_012.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_013.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_014.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_015.jpg", "shoots/2022/2022-11-30-backdraft-cobra/2022-backdraft-cobra_016.jpg"]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Since I\u2019m a car nut, it\u2019s easy to dream about what I\u2019d have in my collection with limitless funds. It\u2019s harder to filter that collection down to one car I may actually be able to own. Without ever driving one, I\u2019ve always assumed that car to be a Backdraft Cobra."
    }), "\n", createVNode(_components.p, {
      children: "For those that don\u2019t know, Backdraft Cobra\u2019s are built in South Africa and use a custom built chassis with E36 suspension components mated to a Ford based drivetrain. Engine options are usually a 427 or Mustang Coyote."
    }), "\n", createVNode(_components.p, {
      children: "This example was a beautiful flat gray with black stripes and teal accents. It also had the \u201CB\u201D option which adds black accent trim and is my favorite look for a Backdraft. For an engine the owner opted for an Iconic built, Ford Racing 427, absolutely brutal and awesome. It\u2019s very close to the exact spec I would use for my own build."
    })]
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
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/shoots/2022/11/1965-backdraft-cobra.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/11/1965-backdraft-cobra.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2022/11/1965-backdraft-cobra.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
