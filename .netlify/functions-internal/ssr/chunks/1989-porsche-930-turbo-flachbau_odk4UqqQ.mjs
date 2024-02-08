import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { j as getPublicPath, k as $$Image, $ as $$Picture } from './pages/__eURed7JZ.mjs';
import { b as $$Gallery, $ as $$Grid, a as $$GridImage } from './GridImage_hXR6kz70.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro("https://eriksolsen.com");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Video;
  const { src, poster } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video width="100%" height="auto" controls${addAttribute(getPublicPath(poster), "poster")}> <source${addAttribute(getPublicPath(src), "src")} type="video/mp4">
Your browser does not support the HTML video tag.
</video>`;
}, "C:/Users/erik/Downloads/sites/eriksolsen.com/src/components/video/Video.astro", void 0);

const frontmatter = {
  "tags": ["porsche", "dripping springs", "turbo", "slantnose"],
  "category": "Miscellaneous",
  "make": "Porsche",
  "date": "2021-06-23T00:00:00.000Z",
  "title": "1989 930 Turbo Flachbau",
  "description": "I switch from photographer to the driver seat to grab some rolling shots of a Porsche 930 Turbo.",
  "location": {
    "text": "Dripping Springs, TX",
    "lat": 30.259390586566116,
    "lon": -98.0451141544943
  },
  "related": ["2021/06/hill-country-pca-event", "2019/08/1977-porsche-911s-silver-metallic", "2019/08/1973-porsche-911s-targa-signal-yellow"],
  "hero": "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_045.jpg",
  "headline": "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_045.jpg",
  "gallery": ["shoots/2021/2021-06-23-porsche-930/porsche-930-2021_039.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_001.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_002.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_003.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_004.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_041.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_043.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_012.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_013.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_005.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_006.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_007.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_010.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_008.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_009.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_011.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_014.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_015.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_016.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_017.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_018.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_019.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_020.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_021.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_022.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_023.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_024.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_025.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_026.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_027.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_028.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_029.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_030.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_031.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_032.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_033.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_034.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_035.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_036.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_037.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_038.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_040.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_042.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_044.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_045.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_046.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_047.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_048.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_049.jpg", "shoots/2021/2021-06-23-porsche-930/porsche-930-2021_050.jpg"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-hardcastles",
    "text": "The Hardcastles"
  }, {
    "depth": 2,
    "slug": "the-widowmaker",
    "text": "The Widowmaker"
  }, {
    "depth": 2,
    "slug": "getting-braver",
    "text": "Getting Braver"
  }, {
    "depth": 2,
    "slug": "give-it-a-rest",
    "text": "Give It A Rest"
  }, {
    "depth": 2,
    "slug": "missed-opportunity",
    "text": "Missed Opportunity"
  }, {
    "depth": 2,
    "slug": "video",
    "text": "Video"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Ever since a friend snagged this incredible 930 Turbo I\u2019ve been wanting to take it out for a drive. I\u2019ll be honest, I was nervous. When discussions take place around the 930, you\u2019ll always hear the term \u201CWidowmaker\u201D. The cars were so much to handle, they had a reputation for killing the owners. That said, you\u2019ll also hear from others how amazing they are to drive."
    }), "\n", createVNode(_components.h2, {
      id: "the-hardcastles",
      children: "The Hardcastles"
    }), "\n", createVNode(_components.p, {
      children: ["So, when Britton and Branson Hardcastle over at ", createVNode(_components.a, {
        href: "https://www.bhardcastle.com/",
        children: "B Hardcastle Media"
      }), " asked me if they could test shoot a car, I saw a perfect opportunity. So while ", createVNode(_components.em, {
        children: "technically"
      }), " these aren\u2019t my photos, I was helping on the shoot (or at least I think I was a help)."]
    }), "\n", createVNode($$Gallery, {
      children: createVNode($$Grid, {
        children: frontmatter.gallery.map(i => createVNode($$GridImage, {
          children: createVNode($$Picture, {
            src: i
          })
        }))
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-widowmaker",
      children: "The Widowmaker"
    }), "\n", createVNode(_components.p, {
      children: "After some static shots at a nearby cul-de-sac, it was time to get out on the road. I\u2019ll be the first to admit that I\u2019m not capable or willing to push this car to it\u2019s limit. I\u2019ve got a family to go home to and the owner probably would like to see his car back in the garage as well."
    }), "\n", createVNode(_components.p, {
      children: "I started off taking it easy. I\u2019ve driven enough turbo cars to understand lag and how boost pressure builds (see my old 500whp Dodge Neon SRT-4)."
    }), "\n", createVNode(_components.h2, {
      id: "getting-braver",
      children: "Getting Braver"
    }), "\n", createVNode(_components.p, {
      children: "All while Branson was taking the beautiful photos you see here, Britton was filming footage to put together a short video. We needed some shots of the 930 flying by the camera car. That required me to dig a bit more into the throttle."
    }), "\n", createVNode(_components.p, {
      children: "Progressively you start to get more comfortable with the way the car builds power. It\u2019s absolutely not linear, but I wouldn\u2019t say it\u2019s as bad as a big turbo four cylinder either. I was conscious to never smash the throttle unless the wheels were pointed forward, which probably helped keep us out of a ditch."
    }), "\n", createVNode(_components.h2, {
      id: "give-it-a-rest",
      children: "Give It A Rest"
    }), "\n", createVNode(_components.p, {
      children: ["Towards the end of the shoot we decided to pull over and give the car a rest and get some final shots as the sun set. We ended up on a beautiful stretch of empty road on ", createVNode(_components.a, {
        href: "https://goo.gl/maps/tA78JHiVg4dXSwHp8",
        children: "West Fitzhugh Road in Dripping Springs, TX"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Branson was able to get some shots of the Lipstick Red interior on this 930 Turbo. It was originally loaded up with a black interior, but the owner decided since this car has high mileage, he\u2019d rather throw originality out the window (although he still keeps the stuff around) and build a dream grey / red 930 Flachbau."
    }), "\n", createVNode(_components.h2, {
      id: "missed-opportunity",
      children: "Missed Opportunity"
    }), "\n", createVNode(_components.p, {
      children: "On our way back to the shop, we were presented with an outrageous Texas Hill Country sunset. If that wasn\u2019t enough, we also had the moon rising directly in front of us. Perfect photo opportunity!"
    }), "\n", createVNode(_components.p, {
      children: "Unfortunately, I missed lining up the car perfectly on the road. You\u2019re so low in the car, it\u2019s actually hard to tell where you are placed on the lines. After seeing the photos I wished we had pulled over and planned better. But we were on a time crunch and there was traffic approaching behind us."
    }), "\n", createVNode(_components.h2, {
      id: "video",
      children: "Video"
    }), "\n", createVNode(_components.p, {
      children: "The Hardcastles ended up doing an awesome job on the video for their first time shooting a car. The video was all their idea, minus the music choice, that was all me."
    }), "\n", createVNode($$Video, {
      src: "/shoots/2021/2021-06-23-porsche-930/1989-porsche-930-turbo-flachbau.mp4",
      poster: "/shoots/2021/2021-06-23-porsche-930/porsche-930-2021_040.jpg"
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve had plenty of opportunities to drive 60\u2019s and 70\u2019s air cooled Porsches. I really do enjoy them. As good as they are, this car is just perfection. I love the styling, the widebody and the drama of the turbo flat-6."
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
const url = "src/content/shoots/2021/06/1989-porsche-930-turbo-flachbau.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/06/1989-porsche-930-turbo-flachbau.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2021/06/1989-porsche-930-turbo-flachbau.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
