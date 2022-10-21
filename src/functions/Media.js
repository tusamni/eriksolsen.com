// modules
import * as path from "path";
import * as fs from "fs";
import { S3 } from "@aws-sdk/client-s3";

// config
import { imageConfig } from "@/src/config.ts";

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

export async function getRemoteImage(file) {
    const publicPath = getPublicPath(file);
    const extension = path.extname(publicPath); // extension of the image file
    const baseFilename = path.basename(publicPath, extension); // filename of the image minus the extension
    const dirPath = path.dirname(publicPath);

    const metaFile = dirPath + "/" + baseFilename + ".json";

    const response = await fetch(metaFile);
    const json = await response.json();

    return {
        width: json.width,
        height: json.height,
        aspectRatio: json.width / json.height,
        date: json.DateTimeOriginal,
        title: json.ObjectName,
        caption: json.Caption,
        author: json.Byline,
        cameraMake: json.Make,
        cameraModel: json.Model,
        lens: json.LensModel,
        aperture: json.FNumber,
        iso: json.ISO,
        focalLength: json.FocalLength,
        shutterSpeed: 1 / json.ExposureTime,
        url: publicPath,
    };
}

// return array with image data
export function getImage(image) {
    const pathname = `${path.dirname(image)}/${path.parse(image).name}`;
    const extension = path.parse(image).ext;
    const metafile = `${imageConfig.cloudUrl}${pathname}.json`; // final json file
    const source = `${imageConfig.cloudUrl}${pathname}${extension}`; // final image source

    // try to find an associated metadata file
    // if error, simply return the image src
    const imageMetadata = fetch(metafile)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })
        .then((json) => {
            // json exists, return the metadata
            return {
                src: source,
                width: json.width,
                height: json.height,
                aspectRatio: json.width / json.height,
                title: json.ObjectName,
                description: json.Caption,
                date: json.DateTimeOriginal,
                cameraMke: json.Make,
                cameraModel: json.Model,
                lens: json.LensModel,
                settingsfStop: json.FNumber,
                settingsISO: json.ISO,
                settingsExposure: json.ExposureTime,
                settingsFocalLength: json.FocalLength,
            };
        })
        .catch(() => {
            // no json exists, return the image source
            return {
                src: source,
            };
        });

    return imageMetadata;
}

// // create an api connection to digitalocean spaces
// export const spacesClient = new S3({
//     endpoint: "https://nyc3.digitaloceanspaces.com",
//     region: "us-east-1",
//     credentials: {
//         accessKeyId: import.meta.env.SPACES_KEY,
//         secretAccessKey: import.meta.env.SPACES_SECRET,
//     },
// });

// // list all the objects in a do spaces s3 container
// export const getImageDirs = async () => {
//     const settings = {
//         Bucket: "thoroffroad",
//         Prefix: "images/",
//     };

//     try {
//         const data = await spacesClient.listObjectsV2(settings);

//         const objects = [];
//         data.Contents.map((obj) => {
//             const filename = path.parse(obj.Key).base; // get the full filename

//             let object = obj.Key;

//             object = object.replace(filename, ``); // remove the file from the path
//             object = object.replace(/\/+$/, ``); // remove the trailing slashes

//             objects.push(object);
//         });

//         // create a unique array
//         let unique = [...new Set(objects)];

//         // remove the unwanted directories
//         const removeDirs = ["", "images"]; // directories to remove
//         unique = unique.filter((val) => !removeDirs.includes(val));

//         // remove leading "images" from the path
//         unique = unique.map(function (e) {
//             return e.replace("images/", "");
//         });

//         return unique;
//     } catch (err) {
//         console.log("Error", err);
//     }
// };

// // list all the objects in a do spaces s3 container
// export const getAllImages = async () => {
//     const settings = {
//         Bucket: "thoroffroad",
//         Prefix: "images/",
//     };

//     try {
//         const data = await spacesClient.listObjectsV2(settings);

//         let objects = [];
//         data.Contents.map((obj) => {
//             const filename = path.parse(obj.Key).base; // get the full filename

//             let object = obj.Key;

//             objects.push(object);
//         });

//         // remove leading "images" from the path
//         objects = objects.map(function (e) {
//             return e.replace("images/", "");
//         });

//         objects = objects.filter((val) => val.includes(".jpg"));

//         return objects;
//     } catch (err) {
//         console.log("Error", err);
//     }
// };
