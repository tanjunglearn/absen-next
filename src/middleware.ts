import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const pageWithNoAuth = ['/', '/index']
const pageWithAuth = ['/dashboard']
const pageConcat = pageWithNoAuth.concat(pageWithAuth)

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('absen_token')?.value

  if (pageWithNoAuth.indexOf(request.nextUrl.pathname) !== -1) {
    if (cookie) return NextResponse.redirect(new URL('/dashboard', request.url))
  } else if (pageWithAuth.indexOf(request.nextUrl.pathname) !== -1) {
    if (!cookie) return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = { matcher: pageConcat }