import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const formType = formData.get('formType');

    if (formType) {
      return Response.redirect(new URL(`/wmebv/${formType}/stap1`, request.nextUrl.origin));
    }
    return NextResponse.json({ error: 'Internal Server Error' });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
