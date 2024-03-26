import { z, defineCollection } from "astro:content";

const blogs = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),
        featured: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string(),
        date: z.date(),
        related: z.array(z.string()).optional(),
    }),
});

const images = defineCollection({
    schema: z.object({
        width: z.number(),
        height: z.number(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
        cameraMake: z.string(),
        cameraModel: z.string(),
        lens: z.string(),
        settingsfStop: z.string().optional(),
        settingsISO: z.string().optional(),
        settingsShutter: z.string().optional(),
        settingsFocalLength: z.string().optional(),
    }),
});

const shoots = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        brand: z.string().optional(),
        featured: z.boolean().optional(),
        tags: z.array(z.any()).optional(),
        category: z.string(),
        date: z.date(),
        color: z.string().default("bg-neutral-100"),
        related: z.array(z.string()).optional(),
        location: z
            .object({
                lat: z.number().optional(),
                lon: z.number().optional(),
                text: z.string(),
            })
            .optional(),
        auction: z
            .object({
                site: z.enum(["Bring a Trailer", "Zero 260", "Cars and Bids"]),
                logo: z.string().optional(),
                url: z.string().url(),
                sold: z.boolean(),
                price: z.number(),
            })
            .optional(),
        hero: z.string(),
        gallery: z.any(),
    }),
});

const testimonials = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        text: z.object({
            short: z.string(),
            long: z.string().optional(),
        }),
        vehicle: z.string(),
        image: z.string(),
    }),
});

export const collections = {
    blogs: blogs,
    images: images,
    shoots: shoots,
    testimonials: testimonials,
};
