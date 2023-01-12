import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),
        featured: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),
        related: z.array(z.string()).optional(),
    })
});

const photography =  defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        brand: z.string().optional(),
        featured: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),
        related: z.array(z.string()).optional(),
        gallery: z.array(z.string()),
    })
})

export const collections = {
    blog: blogs,
    photography: photography,
}