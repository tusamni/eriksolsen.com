import { supabase } from "@/functions/Supabase";

export function getImage(path) {
    const { data } = supabase.storage.from("images").getPublicUrl(path);
    console.log(data);
}
