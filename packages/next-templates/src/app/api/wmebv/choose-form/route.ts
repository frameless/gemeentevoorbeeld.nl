import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    return Response.redirect(
      new URL(
        `/wmebv/${formData.get('loggedIn') === 'true' ? 'DigiD-inloggen' : 'niet-ingelogd/stap1'}`,
        request.nextUrl.origin,
      ),
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
