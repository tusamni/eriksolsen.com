export const siteConfig = {
    name: "Erik S. Olsen",
    description: "My name is Erik, and I'm a digital marketing expert in Austin, TX. I'm currently running the SEM and CRO operations for ICG America.",
    url: "https://eriksolsen.com",
    siteRepo: "https://github.com/tusamni/astro-blog-portfolio"
}

export const imageConfig = {
    cloudUrl: "https://eriksolsen.nyc3.digitaloceanspaces.com/images/",
    imageSizes: [2000, 1440, 1080, 720, 480]
}

export const searchConfig = {
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 3,
    keys: [
        { name: "title", weight: 3 },
        { name: "description", weight: 2 },
        { name: "excerpt", weight: 2 }
    ]
}

export const pageSize = 6
export const postSize = 6 // how many posts per page
export const photoSize = 4 // how many photo galleries per page