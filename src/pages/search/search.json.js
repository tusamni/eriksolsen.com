export async function get() {
    let posts = await import.meta.globEager(`../**/*.md`);

    return {
        body: JSON.stringify(
            Object.values(posts)
                .map((p) => {
                    return {
                        title: p.frontmatter.title,
                        description: p.frontmatter.description,
                        excerpt: p.frontmatter.excerpt,
                        category: p.frontmatter.category,
                        date: p.frontmatter.date,
                        slug: p.url,
                    };
                }),
            false,
            1
        ),
    };
}