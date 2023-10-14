// get the public image url
export function stringToSlug(path) {
    return path
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function slugToString(path) {
    return path.replaceAll("-", " ");
}