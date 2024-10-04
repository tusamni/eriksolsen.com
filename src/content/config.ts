import { defineCollection, z } from 'astro:content';
import { cosmic } from "@/library/cosmic"

const blog = defineCollection({
	loader: async () => {
		const { objects: blogs } = await cosmic.objects.find({ type: "blogs" }).props("title, slug, metadata").depth(2);

		return blogs.map((blog) => ({
			id: blog.slug,
			title: blog.title,
			...blog.metadata
		}));
	},
});

const faq = defineCollection({
	loader: async () => {
		const { objects: faqs } = await cosmic.objects.find({ type: "faqs" }).props("id, title, metadata");

		return faqs.map((faq) => ({
			id: faq.id,
			title: faq.title,
			...faq.metadata
		}));
	}
})

const media = defineCollection({
	loader: async () => {
		let allMedia = [];
		let skip = 0;
		const limit = 100;
		let hasMore = true;

		while (hasMore) {
			try {
				const response = await cosmic.media.find({ type: "image/jpeg" }).props("name, original_name, folder, url, imgix_url, width, height, alt_text, metadata").limit(limit).skip(skip);

				allMedia = allMedia.concat(response.media);

				// Check if there are more items to fetch
				if (response.media.length < limit) {
					hasMore = false;
				} else {
					skip += limit;
				}
			} catch (error) {
				console.error("Error fetching media:", error);
				hasMore = false;
			}
		}

		return allMedia.map((m) => ({
			id: m.name,
			name: m.original_name,
			folder: m.folder,
			url: m.url,
			imgix_url: m.imgix_url,
			alt: m.alt_text,
			width: m.width,
			height: m.height,
			...m.metadata
		}));
	}
})

const shoot = defineCollection({
	loader: async () => {
		const { objects: shoots } = await cosmic.objects.find({ type: "shoots" })
			.props("title, slug, metadata")
			.options({ media: { props: "name, alt_text, width, height, metadata" } })
			.depth(1);

		return shoots.map((shoot) => ({
			id: shoot.slug,
			title: shoot.title,
			...shoot.metadata
		}));
	}
})

const testimonial = defineCollection({
	loader: async () => {
		const { objects: testimonials } = await cosmic.objects.find({ type: "testimonials" })
			.props("id, title, metadata")
			.depth(1);

		return testimonials.map((testimonial) => ({
			id: testimonial.id,
			title: testimonial.title,
			...testimonial.metadata
		}));
	}
})

export const collections = { blog, faq, media, shoot, testimonial };