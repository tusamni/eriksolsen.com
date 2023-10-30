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
    const imgSettings = imageConfig.formats[format]

    return await getImage({ src: fullPath, format: imgSettings.format, width: 2000, height: 2000, quality: imgSettings.quality });
}

export async function getImageDetails(src) {    
    const imagePath = src.replace(/\.[^/.]+$/, "");
    const imageDetails = await getEntryBySlug("images", imagePath);

    return imageDetails;
}
