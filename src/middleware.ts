// src/middleware.ts

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/auth/:path*'], // Apply this middleware to all routes under /api/auth/
};
