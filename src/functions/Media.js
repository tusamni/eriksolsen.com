// config
import { getEntryBySlug } from "astro:content";
import { getImage } from "astro:assets";
import { imageConfig } from "@/src/config.ts";

// return the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}/${file}`;
}

// return an object of Astro optimized images URLs
export async function getOptimizedImages(src, format = "jpeg") {  
    const fullPath = getPublicPath(src);

    return await getImage({ src: fullPath, format: format, widths: [720, 1280, 1536, 2000], width: 2000, height: 2000, quality: 85 });
}

export async function getImageDetails(src) {    
    const imagePath = src.replace(/\.[^/.]+$/, "");
    const imageDetails = await getEntryBySlug("images", imagePath);

    return imageDetails;
}
