// modules
import * as path from "path";
import { S3 } from "@aws-sdk/client-s3";
import imageSize from "probe-image-size";
import exifr from "exifr";

// config
import { imageConfig } from "@/src/config.ts";

// vars
const s3Prefix = "eriksolsen"; // s3 bucket to load
const imageFormat = "jpg"; // which files to look for in getAllImages

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

// return array with image data
export async function getImage(image) {
    const pathname = `${path.dirname(image)}/${path.parse(image).name}`;
    const extension = path.parse(image).ext;
    const metafile = `${imageConfig.cloudUrl}${pathname}.json`; // final json file
    const source = `${imageConfig.cloudUrl}${pathname}${extension}`; // final image source

    // try to find an associated metadata file
    // if error, simply return the image src
    // const imageMetadata = fetch(metafile)
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error: ${response.status}`);
    //         }

    //         return response.json();
    //     })
    //     .then((json) => {
    //         // json exists, return the metadata
    //         return {
    //             src: source,
    //             width: json.width,
    //             height: json.height,
    //             aspectRatio: json.width / json.height,
    //             title: json.ObjectName,
    //             description: json.Caption,
    //             date: json.DateTimeOriginal,
    //             cameraMake: json.Make,
    //             cameraModel: json.Model,
    //             lens: json.LensModel,
    //             settingsfStop: json.FNumber,
    //             settingsISO: json.ISO,
    //             settingsExposure: json.ExposureTime,
    //             settingsFocalLength: json.FocalLength,
    //         };
    //     })
    //     .catch(() => {
    //         // no json file exists, so we don't have metadata for the image
    //         const imgDimensions = await imageSize(source);

    //         return {
    //             src: source,
    //             width: imgDimensions.width,
    //         height: imgDimensions.height,
    //         aspectRatio: imgDimensions.width / imgDimensions.height,
    //         };
    //     });

    const response = await fetch(metafile);
    try {
        JSON.parse(response);
    } catch (error) {
        // no json file exists, so we don't have metadata for the image
        const imgDimensions = await imageSize(source);
        return {
            src: source,
            width: imgDimensions.width,
            height: imgDimensions.height,
            aspectRatio: imgDimensions.width / imgDimensions.height,
        };
    }

    const metadata = await response.json();

    // json exists, return the metadata
    return {
        src: source,
        width: metadata.width,
        height: metadata.height,
        aspectRatio: metadata.width / metadata.height,
        title: metadata.ObjectName,
        description: metadata.Caption,
        date: metadata.DateTimeOriginal,
        cameraMake: metadata.Make,
        cameraModel: metadata.Model,
        lens: metadata.LensModel,
        settingsfStop: metadata.FNumber,
        settingsISO: metadata.ISO,
        settingsExposure: metadata.ExposureTime,
        settingsFocalLength: metadata.FocalLength,
    };
}

// create an api connection to digitalocean spaces
export const spacesClient = new S3({
    endpoint: "https://nyc3.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
        accessKeyId: import.meta.env.SPACES_KEY,
        secretAccessKey: import.meta.env.SPACES_SECRET,
    },
});

// list all the objects in a do spaces s3 container
export const getAllImages = async () => {
    const settings = {
        Bucket: s3Prefix,
        Prefix: "images/shoots/",
    };

    try {
        const data = await spacesClient.listObjectsV2(settings);

        let objects = [];
        data.Contents.map((obj) => {
            const filename = path.parse(obj.Key).base; // get the full filename

            let object = obj.Key;

            objects.push(object);
        });

        // remove leading "images" from the path
        objects = objects.map(function (e) {
            return e.replace("images/", "");
        });

        objects = objects.filter((val) => val.includes(imageFormat));

        return objects;
    } catch (err) {
        console.log("Error", err);
    }
};
