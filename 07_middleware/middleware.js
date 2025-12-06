/*

import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("Middleware chala");
  //Condition 1:- displya me show hoga turant url me /about hit krte hi.
  // return NextResponse.json({message: 'Hello from the about Page'})

  //Condition 2:- url me /about krte hai home page pe leke jaega.
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/about/:path*",
};

*/


/*********************************************************************/
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}