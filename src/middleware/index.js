export function onRequest({ url, cookies }, next) {
    if (url.searchParams.get("paid") && url.searchParams.get("source")) {
        Astro.locals.netlify.context.cookies.set("paid_source", url.searchParams.get("source")); // set the source of the click

        // grab the click identifier from the params so that we can upload offline conversions later
        switch (url.searchParams.get("source")) {
            case "google":
                if (url.searchParams.get("gclid")) {
                    Astro.locals.netlify.context.cookies.set("paid_clickid", url.searchParams.get("gclid"));
                }

                break;

            case "microsoft":
                if (url.searchParams.get("gclid")) {
                    Astro.locals.netlify.context.cookies.set("paid_clickid", url.searchParams.get("msclkid"));
                }

                break;
        }
    }

    // return a Response or the result of calling `next()`
    return next();
}
