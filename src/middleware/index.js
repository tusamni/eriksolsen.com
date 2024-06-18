export function onRequest({ url, cookies }, next) {
    const params = new URLSearchParams(url.search);
    let paramObj = {};
    for (var value of params.keys()) {
        paramObj[value] = params.get(value);
    }

    // if any params are loaded into the sourceData object, set the cookie
    if (Object.keys(paramObj).length > 0) {
        cookies.set("sourceData", JSON.stringify(paramObj)); // set the source of the click
    }

    return next();
}