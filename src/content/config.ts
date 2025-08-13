import { defineCollection, z } from 'astro:content';
import { cosmic } from "@/library/cosmic"

const blog = defineCollection({
	loader: async () => {
		let allBlogs = [];

		try {
			const { objects: blogs } = await cosmic.objects.find({ type: "blogs" }).props("title, status, slug, metadata").depth(2);

			allBlogs = allBlogs.concat(blogs);
		} catch (error) {
			console.log("Error fetching blogs:", error)
		}

		return allBlogs.map((blog) => ({
			id: blog.slug,
			title: blog.title,
			...blog.metadata
		}));
	},
});

const faq = defineCollection({
	loader: async () => {
		let allFaqs = [];

		try {
			const { objects: faqs } = await cosmic.objects.find({ type: "faqs" }).props("id, title, metadata");

			allFaqs = allFaqs.concat(faqs);
		} catch (error) {
			console.error("Error fetching FAQs:", error);
		}

		return allFaqs.map((faq) => ({
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

		try {
			return allMedia.map((m) => ({
				id: m.name,
				name: m.original_name,
				nameBase: m.name.replace(/\.[^/.]+$/, ""),
				folder: m.folder,
				url: m.url,
				imgix_url: m.imgix_url,
				alt: m.alt_text,
				width: m.width,
				height: m.height,
				...m.metadata
			}));
		} catch (error) {
			console.error("Error returning media", error)
		}
	}
})

const shoot = defineCollection({
	loader: async () => {
		const { objects: shoots } = await cosmic.objects.find({ type: "shoots" })
			.props("id, title, slug, metadata")
			.sort("-metadata.date")
			.depth(1)
		//.options({ media: { props: "alt_text" } })

		return shoots.map((shoot) => ({
			id: shoot.slug,
			title: shoot.title,
			cosmic: shoot.id,
			...shoot.metadata
		}));
	}
})

const testimonial = defineCollection({
	loader: async () => {
		let allTestimonials = []

		try {
			const { objects: testimonials } = await cosmic.objects.find({ type: "testimonials" })
				.props("id, title, metadata")
				.depth(1);

			allTestimonials = allTestimonials.concat(testimonials);
		} catch (error) {

		}

		return allTestimonials.map((testimonial) => ({
			id: testimonial.id,
			title: testimonial.title,
			...testimonial.metadata
		}));
	}
})

export const collections = { blog, faq, media, shoot, testimonial };