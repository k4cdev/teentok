import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;// Leer el token de las cookies
    console.log("coquie: ", token);
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/mentors/:path*'], // Asegúrate de que esto coincida con las rutas que deseas proteger
};
