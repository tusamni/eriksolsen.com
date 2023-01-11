import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    schema: {
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),

  },
});

export const collections = {
    blog: blogs,
}