// config
import { imageConfig } from "@/src/config.ts";

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}/${file}`;
}
