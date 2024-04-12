export const Faq = [
    {
        category: "general",
        questions: [
            {
                title: "What should I expect on the shoot?",
                description:
                    "<p>We'll generally try to meet up around sunrise or sunset for the best lighting. A basic photos-only shoot takes around 2 hours, if we're doing video add another hour at a minimum. You're more than welcome to stay with me during the shoot, but it's not required.</p><p>You should ensure the car is very well detailed as any dirt, smudges are likely to show up in the photos. I'll ask you to walk me through any specific details on the car, things you'd like to highlight, etc.</p>",
            },
            {
                title: "Will you come to my location?",
                description:
                    "<p>Absolutely. I'll traveled all over Texas for shoots. I'm currently located in Austin, but have no problem traveling. Within a reasonable distance, I'll do it at no charge. If it's outside the Austin area, I'll ask for travel expenses.</p>",
            },
            {
                title: "How much does a shoot cost?",
                description: `<p>The short answer: it depends. That said, I'll do my best to work within your set budget. I can build a photoshoot package to meet any needs.</p><p>If you'd like more specific details, check out my <a href="/photography/pricing" title="Car photography pricing" class="underline">car photography pricing.</a></p>`,
            },
        ],
    },
    {
        category: "photography",
        questions: [
            {
                title: "What photography gear are you using?",
                description: `<p>I've been through a LOT of gear over the years. However, I keep coming back to my Zeiss Batis lenses. They're consistent, beautiful and lightweight.</p><ul class="text-lg ml-6"><li>Sony Alpha A7 III</li><li>Zeiss Batis 18mm</li><li>Zeiss Batis 25mm</li><li>Zeiss Batis 40mm</li><li>Zeiss Batis 85mm</li><li>Zeiss Batis 135mm</li></ul>`,
            },
        ],
    },
    {
        category: "videography",
        questions: [
            {
                title: "Do you shoot video as well?",
                description: `<p>Absolutely! For most online listings I'd recommend a walk-around video, cold-start and a driving video. If you've got something else in mind, let's talk!</p>`,
            },
            {
                title: "What videography gear are you using?",
                description: `<p>I'm a DJI fan right now. They've got great cameras and stabilization.</p><ul class="text-lg ml-6"><li>DJI Pocket 3</li><li>DJI Action 3</li><li>Tentacle Track E recorder</li><li>Countryman B3 microphone</li><li>iFootage mounting</li></ul>`,
            },
        ],
    },
];

export const Testimonials = [
    {
        text: {
            short: "Erik is now our sole photographer for all vehicles going up for auction. He was able to capture everything the Jaguar E-type had to offer.",
            long: "Erik is now our sole photographer for all vehicles going up for auction. He was able to capture everything the Jaguar E-type had to offer.",
        },
        name: "Chris G",
        vehicle: "1969 Jaguar XKE Series II",
        image: "/testimonials/chris-g.jpg",
    },
    {
        text: {
            short: "Hiring Erik positioned me to sell my vehicle at top dollar compared to the market average; I highly recommend him!",
            long: "Erik's professionalism and expertise were on display from our first interaction onward. He was responsive and flexible while we planned the photo shoot. When it came time to shoot, Erik followed the shot list closely and went above and beyond with additional photos of my vehicle. After shooting, Erik promptly made the necessary edits and shared the photos. Hiring Erik positioned me to sell my vehicle at top dollar compared to the market average; I highly recommend him!",
        },
        name: "Connor C.",
        vehicle: "2000 Toyota 4Runner",
        image: "/testimonials/connor-c.jpg",
    },
    {
        text: {
            short: "Erik is very friendly, punctual, and made the outdoors photo session very enjoyable. The photography results were all I could have wanted.",
            long: "Recently I listed my 1970 Porsche 911T on Hagerty. Upon meeting Erik I was pleased to find an easy to deal with gentleman with an open attitude towards what I was wanting to achieve from the photography of my 911T.  Erik is very friendly, punctual, and made the outdoors photo session very enjoyable. The photography results were all I could have wanted. Erik chose the proper time of day to shoot, positioned my 911T to get the correct depth of field, and I credit Erik with helping me sell my car at full reserve.",
        },
        name: "Frank B.",
        vehicle: "1970 Porsche 911T",
        image: "/testimonials/frank-b.jpg",
    },
];

export const PhotographyPricing = [
    {
        title: "Base",
        description: "A great option for an online auction or for-sale listing.",
        pricing: "$399",
        items: [
            {
                title: "Full set of photos",
                tooltip: "Includes 100 photos of every aspect of the exterior and interior of the vehicle.",
            },
            {
                title: "Professional editing",
                tooltip: "All photos edited using Adobe Lightroom to correct for proper paint color, removal of unnecessary objects, etc.",
            },
            {
                title: "Delivery within 5 business days",
                tooltip: "Delivery of all edited photos, sized to proper specifications based on your auction or sale platform.",
            },
        ],
        cta: "Get Started",
    },
    {
        title: "Premium",
        description: "Step it up with a highly detailed set of photos.",
        pricing: "$599",
        items: [
            {
                title: "Suite of detailed photos",
                tooltip: "Includes 200 highly detailed photos of every inch of the exterior and interior of the vehicle. If access to a lift is available, undercarrige included as well.",
            },
            {
                title: "Professional editing",
                tooltip: "All photos edited using Adobe Lightroom to correct for proper paint color, removal of unnecessary objects, etc.",
            },
            {
                title: "Delivery within 3 business days",
                tooltip: "Delivery of all edited photos, sized to proper specifications based on your auction or sale platform.",
            },
        ],
        cta: "Get Started",
    },
    {
        title: "Custom",
        description: "Looking for something unique that doesn't fit into the other packages? Let's chat.",
        pricing: "Get a Quote",
        items: [{ title: "Custom composite images" }, { title: "Remote locations" }, { title: "Large collections" }],
        cta: "Get Quote",
    },
];

export const VideoPricing = {
    title: "Add a Video Package",
    description: "Enhance your online for sale listing or auction with a trio of videos to show off your vehicle.",
    pricing: "$299",
    items: [
        {
            title: "Cold start video",
            tooltip: "Two cameras filming the exhaust and engine bay while you cold start the vehicle.",
        },
        {
            title: "Walk around video",
            tooltip: "A short video showing all exterior and interior angles filmed with a stabilized camera.",
        },
        {
            title: "Driving video",
            tooltip: "I'll hook up a couple of action cameras and high SPL microphones at the intake and exhaust to capture professional video and audio.",
        },
    ],
};

export const auctionSites = ["bring-a-trailer", "cars-and-bids", "ebay", "hagerty", "hemmings"];
