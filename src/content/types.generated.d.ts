declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"car-photography-update.mdx": {
  id: "car-photography-update.mdx",
  slug: "car-photography-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"chrome-not-loading-optimized-images.mdx": {
  id: "chrome-not-loading-optimized-images.mdx",
  slug: "chrome-not-loading-optimized-images",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"dynamic-bookmarks-in-google-chrome.mdx": {
  id: "dynamic-bookmarks-in-google-chrome.mdx",
  slug: "dynamic-bookmarks-in-google-chrome",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"last-lens-update-ever.mdx": {
  id: "last-lens-update-ever.mdx",
  slug: "last-lens-update-ever",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"lens-change-from-3-to-1.mdx": {
  id: "lens-change-from-3-to-1.mdx",
  slug: "lens-change-from-3-to-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-camera-and-lenses.mdx": {
  id: "new-camera-and-lenses.mdx",
  slug: "new-camera-and-lenses",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"out-with-the-batis-on-to-zony.mdx": {
  id: "out-with-the-batis-on-to-zony.mdx",
  slug: "out-with-the-batis-on-to-zony",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sigma-art-ruined-me.mdx": {
  id: "sigma-art-ruined-me.mdx",
  slug: "sigma-art-ruined-me",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
