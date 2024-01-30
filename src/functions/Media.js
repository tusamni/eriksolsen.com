// config
import { getEntryBySlug } from "astro:content";
import { getImage } from "astro:assets";
import { imageConfig } from "@/src/config.ts";

// return the public image url
export function getPublicPath(path) {
    return `${imageConfig.cloudUrl}/${path}`;
}

export async function getImageDetails(src) {
    const imagePath = src.replace(/\.[^/.]+$/, "");
    const imageDetails = await getEntryBySlug("images", imagePath);

    return imageDetails;
}
