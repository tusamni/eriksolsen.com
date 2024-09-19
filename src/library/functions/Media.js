// config
import { getEntryBySlug } from "astro:content";
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

export async function getShootLenses(shoot) {
    const shootData = await getEntryBySlug("shoots", shoot);
    const imagePaths = shootData.data.images.gallery

    // loop through the photos and get all lenses used
    let allLenses = []
    await Promise.all(imagePaths.map(async (i) => {
        const id = await getImageDetails(i);
        allLenses.push(id.data.lens)
    }))

    // return only the unique lenses
    return [...new Set(allLenses)];
}