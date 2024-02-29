import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (email === 'test@gmail.com' && password === 'Test123') {
      return NextResponse.json({ message: 'Login Success' });
    }
    return NextResponse.json({ message: 'Invalid Email or Password' });
  } catch (error) {
    return NextResponse.json({
      message: 'Invalid Email or Password',
      error,
    });
  }
}
