import type { APIRoute } from "astro";
import { supabaseService } from "@/library/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const id = formData.get("id");

	console.log(id);

	const { data, error } = await supabaseService.from("posts").upsert({
		id: id, status: formData.get("status")
	});
	if (error) { console.log(error) }

	return redirect(`/dashboard/blog/upsert?id=${id}`);
};