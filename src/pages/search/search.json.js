export async function get() {
    let content = await import.meta.globEager(`../**/*.mdx`);

    return {
        body: JSON.stringify(
            Object.values(content).map((c) => {
                return {
                    title: c.frontmatter.title,
                    description: c.frontmatter.description,
                    excerpt: c.frontmatter.excerpt,
                    category: c.frontmatter.category,
                    date: c.frontmatter.date,
                    slug: c.url,
                };
            }),
            false,
            1
        ),
    };
}
