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

    // array to hold the optimized images
    const optimizedImages = [];
    for (let size of imageConfig.imageSizes) {
        optimizedImages.push(await getImage({ src: fullPath, format: format, width: size, height: size, quality: 85 }));
    }

    return optimizedImages;
}

// return a srcset attribute of optimized images
export async function getSrcSet(src, format = "jpeg") {
    const optimizedImages = await getOptimizedImages(src, format);

    const sources = optimizedImages.map((i) => {
        return `${i.src} ${i.attributes.width}w`;
    });
    return sources.join(", ");
}

export async function getImageDetails(src) {
    const imagePath = src.replace(/\.[^/.]+$/, "");
    const imageDetails = await getEntryBySlug("images", imagePath);

    return imageDetails;
}
