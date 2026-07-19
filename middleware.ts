import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUBDOMAIN_MAP: Record<string, string> = {
  stocklens: '/apps/stocklens',
  flipscout: '/apps/flipscout',
  tomescout: '/apps/tomescout',
  tvremote: '/apps/tvremote',
}

// Hosts whose site moved to its own domain; redirect and preserve the path
// (doyumai.nextappfactory.com is the App Store privacy/support URL for Doyum)
const REDIRECT_MAP: Record<string, string> = {
  'doyumai.nextappfactory.com': 'https://doyum.ai',
  'doyum.ai': 'https://doyum.ai',
  'www.doyum.ai': 'https://doyum.ai',
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('x-forwarded-host') || request.headers.get('host') || ''

  // Strip port for local dev (e.g. stocklens.localhost:3000)
  const hostWithoutPort = hostname.split(':')[0]

  if (REDIRECT_MAP[hostWithoutPort]) {
    const target = new URL(REDIRECT_MAP[hostWithoutPort])
    target.pathname = request.nextUrl.pathname
    target.search = request.nextUrl.search
    return NextResponse.redirect(target, 308)
  }

  // Extract subdomain
  // Handles: stocklens.nextappfactory.com and stocklens.localhost
  const parts = hostWithoutPort.split('.')
  const subdomain = parts.length >= 2 ? parts[0] : null

  // If the subdomain is a known app, rewrite internally
  // Preserves sub-paths: stocklens.com/privacy → /apps/stocklens/privacy
  if (subdomain && SUBDOMAIN_MAP[subdomain]) {
    const url = request.nextUrl.clone()
    const basePath = SUBDOMAIN_MAP[subdomain]
    const currentPath = request.nextUrl.pathname
    url.pathname = currentPath === '/' ? basePath : basePath + currentPath
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}
