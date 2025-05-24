// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;

  // Define public paths (login and signup)
  const isPublicPath = path === '/login' || path === '/signup';

  // Allow API routes to pass without checks
  const isApiRoute = path.startsWith('/api');

  if (isApiRoute) {
    return NextResponse.next();
  }

  // If user is logged in (has token) and tries to access login or signup, redirect to profile
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  // If user not logged in and tries to access protected route, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise allow request to proceed
  return NextResponse.next();
}

// Paths to protect or check
export const config = {
  matcher: ['/', '/profile', '/login', '/signup', '/dashboard/:path*'],
};
