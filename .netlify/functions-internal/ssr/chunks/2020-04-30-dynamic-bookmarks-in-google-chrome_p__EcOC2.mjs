import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_4pLo1zG6.mjs';
import { k as $$Image } from './pages/__eURed7JZ.mjs';
import 'clsx';

const frontmatter = {
  "slug": "dynamic-bookmarks-in-google-chrome",
  "tags": ["marketing", "code", "chrome"],
  "category": "Coding",
  "date": "2020-04-30T00:00:00.000Z",
  "title": "Dynamic Bookmarks in Google Chrome",
  "description": "I needed a simple way to automatically create date ranges for bookmarks in Google Chrome",
  "excerpt": "As a digital marketer, I'm constantly loading Google Analytics to view site performance metrics. I have a couple very specific requirements when looking at performance data in Analytics.",
  "related": ["chrome-not-loading-optimized-images"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-issue",
    "text": "The Issue"
  }, {
    "depth": 3,
    "slug": "whats-the-fix",
    "text": "What\u2019s the Fix?"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 3,
    "slug": "bugs-and-things-to-note",
    "text": "Bugs and Things to Note"
  }, {
    "depth": 2,
    "slug": "get-the-code",
    "text": "Get the Code"
  }, {
    "depth": 3,
    "slug": "whats-next",
    "text": "What\u2019s Next?"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-issue",
      children: "The Issue"
    }), "\n", createVNode(_components.p, {
      children: "As a digital marketer, I\u2019m constantly loading Google Analytics to view site performance metrics. I have very specific requirements when looking at performance data in Analytics:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "I need to compare year-over-year data, ie: 2020 vs. 2019"
      }), "\n", createVNode(_components.li, {
        children: "I need to make sure I\u2019m comparing the same days of the week, ie: when comparing today vs. last year, I need to compare a Monday vs. Monday, but the dates don\u2019t line up nicely, so you\u2019re comparing the 22nd vs the 23rd last year."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This can be time consuming when using Google Analytics daily. You\u2019ve got to load Analytics, get to the property, select the report and set your date ranges. After frustration set in, I resolved to figure out a method to build dynamic bookmarks in Google Chrome."
    }), "\n", createVNode(_components.h3, {
      id: "whats-the-fix",
      children: "What\u2019s the Fix?"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s assume that we want to populate a Google Analytics report with the date range for the current day, versus the same day of the week last year. As I\u2019m writing this on Thursday (4/30/2020), the script will compare to the same Thursday last year (5/02/2019)."
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.p, {
      children: "The first step is to build the current year\u2019s date. For this example we\u2019re going to use today\u2019s date."
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// create a new JS date"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_date "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4",
              fontWeight: "bold"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// seperate out the day, month and year"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getDate"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// add one since javascript starts at 0 for january"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getMonth"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_yyyy "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getFullYear"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// analytics requires leading zeros for day and month"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (start_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    start_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_dd;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (start_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    start_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_mm;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// this is the final start date string"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_yyyy "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start_dd;"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Cool, now we\u2019ve got a date that looks like:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dracula-soft",
      style: {
        backgroundColor: "#282A36",
        color: "#f6f6f4",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "20200430"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Next we need to do something similiar, but move back exactly one year to the same day of the week."
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
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_date "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4",
              fontWeight: "bold"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// adjust the date back one full year"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "end_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "setMilliseconds"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(end_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getMilliseconds"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 604800000"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 52"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getDate"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// add one since javascript starts at 0 for january"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getMonth"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_yyyy "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_date."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "getFullYear"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// analytics requires leading zeros for day and month"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (end_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    end_dd "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_dd;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (end_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    end_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_mm;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// the final comparison date string"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' ""'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_yyyy "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_mm "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end_dd;"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Now we\u2019ve got the current date and comparison date, properly formattted for Analytics. Next let\u2019s build the URL necessary to load the report."
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// insert the url of the report you'd like to load"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// I save custom reports and use those as the base url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "https://analytics.google.com/analytics/web/#my-reports/**REPORTID**/%3F_u.date00%3D"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "%26_u.date01%3D"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "%26_u.date10%3D"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "%26_u.date11%3D"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "There\u2019s one final piece of the puzzle. We need to wrap all the prior code in a function, then call that function to open a new tab."
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
            children: "javascript: "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // all the previous code"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // gets loaded here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "//tell chrome to open the window"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "window."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "open"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(), "
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "_self"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "bugs-and-things-to-note",
      children: "Bugs and Things to Note"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "As of the time of writing this code, Google Chrome didn\u2019t like any comments. I assume that\u2019s because the bookmark in Google Chrome gets converted to one long string, so any comment in your code comments the rest of the code out."
      }), "\n", createVNode(_components.li, {
        children: "For some reason if you open a new tab, then try to load the bookmark, nothing happens. If you try the bookmark in a loaded tab, it\u2019s fine. If you right click and open in a new tab, it\u2019s fine. Anyone have a fix for this?"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "get-the-code",
      children: "Get the Code"
    }), "\n", createVNode(_components.p, {
      children: ["If you want to see the full code, I\u2019ve created a ", createVNode(_components.a, {
        href: "https://gist.github.com/tusamni/1007292a8566ac5a7f7268626ee5f8ae",
        children: "GitHub Gist"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "whats-next",
      children: "What\u2019s Next?"
    }), "\n", createVNode(_components.p, {
      children: "In part two, I\u2019ll show you how to adopt this code to allow for other date ranges:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Yesterday"
      }), "\n", createVNode(_components.li, {
        children: "Last seven days"
      }), "\n", createVNode(_components.li, {
        children: "Month to date"
      }), "\n", createVNode(_components.li, {
        children: "Last month"
      }), "\n"]
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
const url = "src/content/blogs/2020-04-30-dynamic-bookmarks-in-google-chrome.mdx";
const file = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2020-04-30-dynamic-bookmarks-in-google-chrome.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/blogs/2020-04-30-dynamic-bookmarks-in-google-chrome.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
