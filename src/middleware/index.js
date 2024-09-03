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

	return next();
}