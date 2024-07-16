import { supabase } from "@/library/supabase";

export async function onRequest({ url, cookies, redirect }, next) {
    // check for a protected path requiring login    
    const protectedPaths = [
        "dashboard"
    ]

    if (protectedPaths.some((string) => url.pathname.includes(string))) {
        const accessToken = cookies.get("sb-access-token");
        const refreshToken = cookies.get("sb-refresh-token");

        if (!accessToken || !refreshToken) {
            return redirect("/login");
        }

        const { data, error } = await supabase.auth.setSession({
            refresh_token: refreshToken.value,
            access_token: accessToken.value,
        });

        if (error) {
            cookies.delete("sb-access-token", {
                path: "/",
            });
            cookies.delete("sb-refresh-token", {
                path: "/",
            });

            return redirect("/login");
        }
    }

    const validParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "gclid",
    ]

    const params = new URLSearchParams(url.search);

    let paramObj = {};
    for (var value of params.keys()) {
        if (validParams.includes(value)) {
            paramObj[value] = params.get(value);
        }
    }

    // if any params are loaded into the sourceData object, set the cookie
    if (Object.keys(paramObj).length > 0) {
        cookies.set("sourceData", JSON.stringify(paramObj)); // set the source of the click
    }

    return next();
}