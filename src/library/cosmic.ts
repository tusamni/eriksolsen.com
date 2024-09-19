import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
	bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
	readKey: import.meta.env.COSMIC_READ_KEY
});