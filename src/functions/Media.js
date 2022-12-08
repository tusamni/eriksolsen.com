// modules
import * as path from "path";
import { S3 } from "@aws-sdk/client-s3";
import exifReader from "exifreader";

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
    const source = `${imageConfig.cloudUrl}${pathname}${extension}`; // final image source

    let metadata = await exifReader.load(source);

    if (typeof metadata["Object Name"] === "undefined" || metadata["Object Name"] === null) {
        return {
            src: source,
            width: metadata["Image Width"].value,
            height: metadata["Image Height"].value,
            aspectRatio: metadata["Image Width"].value / metadata["Image Height"].value,
        };
    } else {
        return {
            src: source,
            width: metadata["Image Width"].value,
            height: metadata["Image Height"].value,
            aspectRatio: metadata["Image Width"].value / metadata["Image Height"].value,
            title: metadata["Object Name"].description,
            description: metadata["Caption/Abstract"].description,
            date: metadata["DateTimeOriginal"].value,
            cameraMake: metadata["Make"].value,
            cameraModel: metadata["Model"].value,
            lens: metadata["LensModel"].value,
            settingsfStop: metadata["ApertureValue"].description,
            settingsISO: metadata["ISOSpeedRatings"].description,
            settingsExposure: metadata["ExposureTime"].description,
            settingsFocalLength: metadata["FocalLength"].value[0] / metadata["FocalLength"].value[1],
        };
    }
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
