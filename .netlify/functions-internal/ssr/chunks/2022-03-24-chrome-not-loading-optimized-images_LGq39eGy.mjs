import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "slug": "chrome-not-loading-optimized-images",
  "tags": ["google chrome", "webp", "images", "code"],
  "category": "Coding",
  "date": "2022-03-24T00:00:00.000Z",
  "title": "Google Chrome Won't Use Optimized Images",
  "description": "I just about pulled my hair out figuring out why Chrome wouldn't load WebP or AVIF images when using <Figure>.",
  "excerpt": "Responsive images are a must have when building websites, so I decided to generate AVIF and WebP images for use in a <srcset> responsive image tag. However, Chrome was defaulting to the standard JPG.",
  "related": ["dynamic-bookmarks-in-google-chrome"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-avif-and-webp",
    "text": "Why AVIF and WebP"
  }, {
    "depth": 3,
    "slug": "code",
    "text": "Code"
  }, {
    "depth": 2,
    "slug": "time-to-test",
    "text": "Time to Test"
  }, {
    "depth": 2,
    "slug": "the-fix",
    "text": "The Fix"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "why-avif-and-webp",
      children: "Why AVIF and WebP"
    }), "\n", createVNode(_components.p, {
      children: "It should be pretty obvious, but as the web grows, web developers need to do their best to reduce the payload to the browser. AVIF and WebP came along as a new image compression formats to produce similar quality images at a large reduction in file size. Sounds great! Let\u2019s do it."
    }), "\n", createVNode(_components.h3, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.p, {
      children: ["I started by building the image tag. The first tag is a fallback for browsers that won\u2019t support the ", createVNode(_components.code, {
        children: "<source>"
      }), " tag. Then, we\u2019ll load two different ", createVNode(_components.code, {
        children: "<source>"
      }), " tags, letting the browser know that we have AVIF and WebP options as well."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dracula-soft",
      style: {
        backgroundColor: "#282A36",
        color: "#f6f6f4",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "Figure"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.jpg"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " srcset"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.avif"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image/avif"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " srcset"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.webp"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image/web"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "picture"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "time-to-test",
      children: "Time to Test"
    }), "\n", createVNode(_components.p, {
      children: "Great. We\u2019ve build the AVIF and WebP images, created the image tag and now we\u2019re good to go. I loaded up DevTools, checked that the WebP URL was loading correctly, then watched the \u201CNetwork\u201D tab to see the browser load the AVIF and WebP images instead of the optimized images."
    }), "\n", createVNode(_components.p, {
      children: "Nope."
    }), "\n", createVNode(_components.p, {
      children: "It was loading the JPG instead of the optimized images. I don\u2019t care to tell you how long I worked to fix this issue, but it was far too long."
    }), "\n", createVNode(_components.h2, {
      id: "the-fix",
      children: "The Fix"
    }), "\n", createVNode(_components.p, {
      children: ["Turns out it was simple. The ", createVNode(_components.code, {
        children: "<source>"
      }), " tags inside of the ", createVNode(_components.code, {
        children: "<Figure>"
      }), " tag have to be in order. So, you\u2019ll list the most optimized format first, then down to JPG. For example, you\u2019d load AVIF first, then WebP and finally the fallback tag."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dracula-soft",
      style: {
        backgroundColor: "#282A36",
        color: "#f6f6f4",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "Figure"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " srcset"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.avif"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image/avif"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "source"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " srcset"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.webp"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image/web"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884",
              fontStyle: "italic"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "image.jpg"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "picture"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ">"
          })]
        })]
      })
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
const url = "src/content/blogs/2022-03-24-chrome-not-loading-optimized-images.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2022-03-24-chrome-not-loading-optimized-images.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2022-03-24-chrome-not-loading-optimized-images.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
