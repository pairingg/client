import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 로그인 페이지는 검사하지 않음
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  // 클라이언트의 토큰 확인
  // TODO: 토큰 검사 로직 추가, 일단 토큰이 있기만하면 통과
  const token = request.cookies.get('accessToken')?.value;

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|$).*)'],
};
