import rss from "@astrojs/rss";

// config
import { siteConfig } from "@/src/config"

const postImport = import.meta.globEager("./**/*.md")
const posts = Object.values(postImport)

export const get = () => rss({
    // `<title>` field in output xml
    title: siteConfig.name,
    // `<description>` field in output xml
    description: siteConfig.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    //site: import.meta.env.SITE,
    site: "https://eriksolsen.com",
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts.map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
    })),

    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
});