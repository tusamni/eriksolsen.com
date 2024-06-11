export function onRequest({ url, cookies }, next) {
    const sourceData = {};

    // if params exist, grab them
    if (url.searchParams.get("utm_source")) sourceData.source = url.searchParams.get("utm_source");
    if (url.searchParams.get("utm_medium")) sourceData.medium = url.searchParams.get("utm_medium");
    if (url.searchParams.get("utm_campaign")) sourceData.campaign = url.searchParams.get("utm_campaign");
    if (url.searchParams.get("utm_term")) sourceData.term = url.searchParams.get("utm_term");
    if (url.searchParams.get("utm_content")) sourceData.content = url.searchParams.get("utm_content");
    if (url.searchParams.get("gclid")) sourceData.clickid = url.searchParams.get("gclid");
    if (url.searchParams.get("msclkid")) sourceData.clickid = url.searchParams.get("msclkid");
    if (url.searchParams.get("fbclid")) sourceData.clickid = url.searchParams.get("fbclid")

    // if any params are loaded into the sourceData object, set the cookie
    if (Object.keys(sourceData).length > 0) {
        cookies.set("sourceData", JSON.stringify(sourceData)); // set the source of the click
    }

    return next();
}