import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server"

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"])

export const onRequest = clerkMiddleware((auth, context) => {
	const { redirectToSignIn, userId } = auth()

	if (!import.meta.env.DEV) {
		if (!userId && isProtectedRoute(context.request)) {
			return redirectToSignIn()
		}
	}
})