export const Links = [
    {
        display: "Car Photography",
        url: "/photography",
    },
    {
        display: "Pricing",
        description: {
            short: "Details for car photography pricing.",
        },
        url: "/photography/pricing",
    },
    {
        display: "More",
        submenu: [
            {
                title: "FAQ",
                description: {
                    short: "Commonly asked car photography questions.",
                },
                url: "/photography/faq",
            },
            // {
            //     title: "Testimonials",
            //     description: "Hear from some of my previous clients.",
            //     url: "/photography/testimonials",
            // },
            {
                title: "Recent Shoots",
                description: {
                    short: "Browse my recent automotive shoots.",
                },
                url: "/photography/shoots",
            },
            {
                title: "My Gear",
                description: {
                    short: "Current gear list & recommendations.",
                },
                url: "/photography/gear",
            },
            {
                title: "Blog",
                description: {
                    short: "Sometimes I write about photography",
                },
                url: "/blog",
            },
        ],
    },
];
