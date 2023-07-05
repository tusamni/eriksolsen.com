export const Marketing = {
    title: "Digital Marketing",
    knowledge: [
        "Search Engine Marketing",
        "Google Shopping",
        "Google Merchant Center",
        "Data Analytics",
        "Attribution Modeling",
        "Marketing Automation",
    ],
    tools: [
        "Supermetrics",
        "Google Analytics",
        "Google Data Studio",
        "Google Tag Manager",
    ],
};

export const Multivariate = {
    title: "Multivariate Testing",
    knowledge: ["Development", "Design", "Reporting"],
    tools: ["Visual Website Optimizer", "Lucky Orange", "Trello", "Figma"],
};

export const Development = {
    title: "Web Development",
    knowledge: [
        "Static Websites",
        "Site Speed Optimization",
        "Search Engine Optimization",
    ],
    tools: ["HTML / CSS / JS", "GitHub", "VS Code", "Netlify"],
};

export const Career = [
    {
        short: "I",
        title: "ICG America",
        dates: "2013 and Counting...",
        summary:
            "I'm currently managing $2MM+ of yearly search marketing spend  through search, display and social channels. I'm also leading our CRO program running several large-scale tests monthly.",
        icon: "icg",
        iconBg: "ring-green-100",
        size: "w-6 h-6",
    },
    {
        short: "B",
        title: "Basement Systems",
        dates: "2011 - 2013",
        summary:
            "Manage the paid search program for our dealer network, which consisted of 200 accounts generating 5000 leads per month.",
        icon: "bsi",
        iconBg: "ring-pink-100",
        size: "w-20 h-20",
    },
    {
        short: "A",
        title: "ABCLeads",
        dates: "2004 - 2011",
        summary:
            "Drive profitable sales leads for the home improvement and insurance industries through multiple paid search channels.",
        icon: "abc",
        iconBg: "ring-red-100",
        size: "w-20 h-20",
    },
];

export const Repos = [
    {
        url: "https://github.com/tusamni/picture-source-builder",
        name: "Picture Source Builder",
        language: "javascript",
        description:
            "I needed a tool to locally build various resized and reformatted images for use in <source> tags. This is a quick and dirty tool to take a folder full of images (./input), resize them and reformat them into an output (./output) folder using Sharp.",
    },
    {
        url: "https://github.com/tusamni/tailwind-hot-reload",
        name: "Tailwind Hot Reload",
        language: "javascript",
        description:
            "I needed a simple way of quickly spooling up a hot reloading server that had Tailwind installed and running from the get-go. This is as simple as it gets. Place any HTML in the /src folder and it'll be picked up by BrowserSync.",
    },
];
