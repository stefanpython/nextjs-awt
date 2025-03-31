import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is a protected route
  const isProtectedRoute = pathname.startsWith("/dashboard");

  // Check if the path is an auth route
  const isAuthRoute =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  // Get the session token
  const token = await getToken({ req: request });

  // Redirect to login if accessing a protected route without a token
  if (isProtectedRoute && !token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // Redirect to dashboard if accessing an auth route with a token
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
