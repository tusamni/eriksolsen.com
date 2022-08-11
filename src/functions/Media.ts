// modules
import path from "path"

// config
import { imageConfig } from "../config"

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

// get the base directory without the filename
// export function getDirectory(file) {
//     const publicPath = getPublicPath(file);

//     return path.dirname(publicPath);
// }

// get the base filename without the extension
// export function getFilename(file) {
//     const publicPath = getPublicPath(file);
//     const extension = getExtension(file); // extension of the image file

//     return path.basename(publicPath, extension); // filename of the image minus the extension
// }

// get the extension of the image
// export function getExtension(file) {
//     return path.extname(file); // extension of the image file
// }

export async function getRemoteImage(file) {
    const publicPath = getPublicPath(file);
    const extension = path.extname(publicPath); // extension of the image file
    const baseFilename = path.basename(publicPath, extension); // filename of the image minus the extension
    const dirPath = path.dirname(publicPath);

    const metaFile = dirPath + '/' + baseFilename + '.json';

    const response = await fetch(metaFile);
    const json = await response.json();

    return {
        "width": json.width,
        "height": json.height,
        "date": json.DateTimeOriginal,
        "title": json.ObjectName,
        "caption": json.Caption,
        "author": json.Byline,
        "cameraMake": json.Make,
        "cameraModel": json.Model,
        "lens": json.LensModel,
        "aperture": json.FNumber,
        "iso": json.ISO,
        "focalLength": json.FocalLength,
        "shutterSpeed": 1 / json.ExposureTime,
        "url": publicPath,
    }
}