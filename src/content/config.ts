import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    schema: {
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),
        featured: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),
        related: z.array(z.string()).optional(),
    },
});

const shoots =  defineCollection({
    schema: {
        title: z.string(),
        description: z.string(),
        brand: z.string().optional(),
        featured: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),
        related: z.array(z.string()).optional(),
        gallery: z.array(z.string()),
    }
})

export const collections = {
    blog: blogs,
    shoot: shoots,
}