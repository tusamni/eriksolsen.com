export async function getPosts(limit = 4) {
    return await import.meta.glob("../pages/blog/*.mdx");
    
}

export async function getShoots(limit = 4) {
    return await import.meta.glob("../pages/photography/*.mdx");
}