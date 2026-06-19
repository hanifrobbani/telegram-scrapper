import { NextRequest, NextResponse } from 'next/server'
import { verifyAccessToken } from '@/lib/auth/jwt'

const authRoutes = ['/login', '/request-access']
const publicApiRoutes = ['/api/auth/login', '/api/auth/req-access', '/api/auth/refresh']

const MIDDLEWARE_SECRET = process.env.MIDDLEWARE_SECRET!

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    const accessToken = req.cookies.get('access_token')?.value
    const refreshToken = req.cookies.get('refresh_token')?.value

    const isAuthRoute = authRoutes.includes(pathname)

    let isAuthenticated = false

    if (publicApiRoutes.includes(pathname)) {
        return NextResponse.next()
    }

    // verify access token
    if (accessToken) {
        try {
            await verifyAccessToken(accessToken)
            isAuthenticated = true
        } catch { }
    }

    if (!isAuthenticated && refreshToken) {
        try {
            const refreshResponse = await fetch(
                new URL('/api/auth/refresh', req.url),
                {
                    method: 'POST',
                    headers: {
                        cookie: req.headers.get('cookie') || '',
                        'x-middleware-secret': MIDDLEWARE_SECRET
                    },
                }
            )
            console.log("fetch refresh token...")
            if (refreshResponse.ok) {
                const response = NextResponse.next()

                const setCookie = refreshResponse.headers.get('set-cookie')

                if (setCookie) {
                    response.headers.set('set-cookie', setCookie)
                }

                isAuthenticated = true

                return response
            }
        } catch {

            // handle unexpected error
        }
    }

    if (isAuthRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    if (pathname.startsWith('/api/') && !isAuthenticated) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (!isAuthRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',],
}