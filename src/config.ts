export const siteConfig = {
    name: "Erik Olsen",
    nameShort: "ErikOlsen",
    description: "My name is Erik, and I'm a digital marketing expert in Austin, TX. I'm currently running the SEM and CRO operations for ICG America.",
    url: "https://eriksolsen.com",
    siteRepo: "https://github.com/tusamni/astro-blog-portfolio",
    email: "erik@eriksolsen.com",
    phone: {
        base: "+18605142743",
        formatted: "(860) 514-2743",
    },
};

export const imageConfig = {
    cloudUrl: "https://media.eriksolsen.com/images",
    imageSizes: [480, 720, 1280, 1536, 2000],
    formats: {
        "avif" : {
            format: "avif", 
            quality: 30
        },
        "webp" : {
            format: "webp",
            quality: 40
        },
        "jpeg" : {
            format: "jpeg",
            quality: 75
        }
    }
};
