import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "slug": "hdr-not-supported-windows-11",
  "tags": ["photography", "sony", "zeiss", "cars"],
  "category": "Technology",
  "date": "2023-01-12T00:00:00.000Z",
  "title": "HDR Not Supported on Windows 11",
  "description": "If you're receiving an error when enabling HDR on Windows 11 you may have to enable HDR on your monitor.",
  "excerpt": "After purchasing my first HDR400 capable monitor, Windows wasn't recognizing HDR support. Turns out there's an easy fix for Dell monitors."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "not-supported",
    "text": "Not Supported"
  }, {
    "depth": 2,
    "slug": "the-fix",
    "text": "The Fix"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "not-supported",
      children: "Not Supported"
    }), "\n", createVNode(_components.p, {
      children: "We recently moved to a hybrid work schedule at my day job. That meant that I needed a monitor at home (my Dell U3818DW) and one at work."
    }), "\n", createVNode(_components.p, {
      children: "I would have loved to keep the ultrawide setup at work with a U4021QW, the specs are incredible, but as of this post, the $1,799 price tag was too much."
    }), "\n", createVNode(_components.p, {
      children: "I decided to try a single 32\u201D Dell U3223QW instead. The bump in resolution should help the move to a single monitor. In addition, my new Dell XPS 9320 can run dual U3223QW monitors without issue while operating the OLED screen as well."
    }), "\n", createVNode(_components.p, {
      children: "I was excited to hook up the screen and try out HDR support in Windows 11. Turns out that you can\u2019t simply hook the monitor up and turn on support."
    }), "\n", createVNode(_components.h2, {
      id: "the-fix",
      children: "The Fix"
    }), "\n", createVNode(_components.p, {
      children: "Dell turns off HDR support on UltraSharp monitors by default. Go into the settings of the monitor and search for HDR support and enable HDR400. Once you restart Windows, you\u2019ll be able to enable support."
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
const url = "src/content/blogs/2023-01-12-hdr-not-supported-windows-11.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2023-01-12-hdr-not-supported-windows-11.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2023-01-12-hdr-not-supported-windows-11.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
