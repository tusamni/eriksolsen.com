import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    schema: {
        title: z.string(),
  },
});

export const collections = {
    blog: blogs,
}