import { NextResponse, NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { requireBearerToken } from './lib/auth-api' // ścieżka zależna od projektu
import { signToken } from './lib/jwt'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    return NextResponse.next();

    if (pathname.startsWith('/api') && pathname.startsWith("/api/auth") === false) {
        const authResult = requireBearerToken(req)

        console.log({
            authResult,
            pathname
        });

        if (!authResult.success) {
            return new NextResponse(JSON.stringify({ error: authResult.message }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }
        // opcjonalnie można przekazać dane użytkownika dalej przez nagłówki
        return NextResponse.next()
    }

    // 🌐 Wszystkie inne trasy – NextAuth (czyli sesja, cookies itd.)
    return withAuth(req)
}