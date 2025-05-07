import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
	bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
	readKey: import.meta.env.COSMIC_READ_KEY,
	writeKey: import.meta.env.COSMIC_WRITE_KEY
});

export async function getLeads(limit = null, status) {
	const { objects: leads } = await cosmic.objects.find({ type: "leads", 'metadata.status': status }).props("id, title, metadata").limit(limit);

	return leads;
}

export async function getLead(id) {
	const { object: lead } = await cosmic.objects.findOne({ type: "leads", id: id }).props("id, title, metadata");

	return lead;
}
export async function getObjectType(type) {
	return await cosmic.objectTypes.findOne(type)
}

export async function getCosmicDate() {
	// get todays date
	let date = new Date();
	const dateOffset = date.getTimezoneOffset();
	date = new Date(date.getTime() - dateOffset * 60 * 1000);

	return date.toISOString().split("T")[0];
}