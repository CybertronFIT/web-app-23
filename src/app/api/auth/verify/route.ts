import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { TOKEN_NAME, secret } from "@/constants/Cookie";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get(TOKEN_NAME);

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const { value } = token;

  try {
    const payload = verify(value, secret);

    const response = {
      message: "Verified User",
      payload: payload,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 402,
      }
    );
  }
}
