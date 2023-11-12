import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    return Response.redirect(new URL('/wmebv/ingelogd/stap2', request.nextUrl.origin));
  } catch (error) {
    console.log(error);

    return Response.json({ error: 'Internal Server Error' });
  }
}
