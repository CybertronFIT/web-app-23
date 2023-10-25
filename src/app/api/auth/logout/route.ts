import { TOKEN_NAME } from "@/constants/Cookie";
import { NextResponse } from "next/server";

export async function GET() {
    const response = new NextResponse();

    // Set the cookie with an expiration date in the past to delete it
    response.cookies.set(TOKEN_NAME, '', {
      expires: new Date('Thu, 31 Jan 1999 00:00:00 GMT'),
      path: '/',
      httpOnly: true,
    });
    // Return a response
    return response;
}