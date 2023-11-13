import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    return Response.redirect(new URL('/wmebv', request.nextUrl.origin));
  } catch (error) {
    console.log(error);

    return Response.json({ error: 'Internal Server Error' });
  }
}
