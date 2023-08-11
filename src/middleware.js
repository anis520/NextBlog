import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(NextRequest) {
  console.log("midlewarw");

  const token = NextRequest.cookies.get("authToken")?.value;
  // console.log(token);
  const notloggedPaths =
    NextRequest.nextUrl.pathname == "/login" ||
    NextRequest.nextUrl.pathname == "/register";

  if (notloggedPaths) {
    if (token) {
      return NextResponse.redirect(new URL("/", NextRequest.url));
    }
  } else {
    if (!token) {
      return NextResponse.redirect(new URL("/login", NextRequest.url));
    }
  }

  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/tasks",
    "/quiz",
    "/position",
    "/admin",
    "/login",
    "/register",
  ],
};
