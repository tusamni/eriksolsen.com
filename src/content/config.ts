import { z, defineCollection } from "astro:content";

const images = defineCollection({
	schema: z.object({
		width: z.number(),
		height: z.number(),
		title: z.string().or(z.number()),
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
		description: z.string().optional(),
		brand: z.string().optional(),
		featured: z.boolean().optional(),
		customLayout: z.boolean().optional(),
		tags: z.array(z.any()).optional(),
		category: z.string(),
		date: z.date(),
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
				site: z.enum(["Bring a Trailer", "Zero 260", "Cars and Bids", "Hagerty"]),
				logo: z.string().optional(),
				url: z.string().url(),
				sold: z.boolean(),
				price: z.number(),
			})
			.optional(),
		images: z.object({
			columns: z.string().optional(),
			hero: z.string(),
			heading: z.string().optional(),
			gallery: z.array(z.string()),
		}),
	}),
});

export const collections = {
	images: images,
	shoots: shoots
};
