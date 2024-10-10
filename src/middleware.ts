import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export function middleware(req) {
    const { userId } = auth(req);

    // Kullanıcı kimliği yoksa, giriş sayfasına yönlendir
    if (!userId) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Middleware'ı hangi yollar için çalıştırmak istediğinizi belirtin
export const config = {
    matcher: ['/protected/:path*'],
};
