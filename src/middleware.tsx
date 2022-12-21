import { NextResponse } from 'next/server'
import useAuth from './hooks/useAuth'
import type { NextRequest } from 'next/server'

const pageWithNoAuth = ['/', '/index']

export function middleware(request: NextRequest) {
  const { isAuthenticated } = useAuth()

  if (pageWithNoAuth.indexOf(request.nextUrl.pathname) !== -1) {
    if (!isAuthenticated) return NextResponse.next()
    else return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/index'],
}