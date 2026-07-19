import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUBDOMAIN_MAP: Record<string, string> = {
  stocklens: '/apps/stocklens',
  flipscout: '/apps/flipscout',
  tomescout: '/apps/tomescout',
  tvremote: '/apps/tvremote',
  doyumai: '/apps/doyum',
}

// Standalone custom domains, matched on the full host before subdomain parsing
const DOMAIN_MAP: Record<string, string> = {
  'doyum.ai': '/apps/doyum',
  'www.doyum.ai': '/apps/doyum',
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('x-forwarded-host') || request.headers.get('host') || ''

  // Strip port for local dev (e.g. stocklens.localhost:3000)
  const hostWithoutPort = hostname.split(':')[0]

  if (DOMAIN_MAP[hostWithoutPort]) {
    const url = request.nextUrl.clone()
    const basePath = DOMAIN_MAP[hostWithoutPort]
    const currentPath = request.nextUrl.pathname
    url.pathname = currentPath === '/' ? basePath : basePath + currentPath
    return NextResponse.rewrite(url)
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
