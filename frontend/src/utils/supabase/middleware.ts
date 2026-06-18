import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/auth/login', '/auth/signup', '/auth/forgot-password', '/'];

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // IMPORTANT: Refreshing the session to ensure the user is authenticated.
  // This is important for securing any routes that require the user to be authenticated.
  const { data } = await supabase.auth.getSession();

  // Redirect to login if trying to access protected routes without authentication
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthCallback = pathname.startsWith('/auth/callback');
  const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/profile');

  if (isProtectedRoute && !data.session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if ((pathname === '/' || isPublicRoute) && data.session && pathname !== '/') {
    // Redirect authenticated users away from login/signup pages
    if (pathname === '/auth/login' || pathname === '/auth/signup') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return supabaseResponse;
}
