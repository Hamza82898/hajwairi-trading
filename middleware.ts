export { auth as middleware } from "@/auth";

export const config ={
    matcher: [
        "/admin/:path*",
        "/checkout/:path*",
        "/profile/:path*",
    ],
};