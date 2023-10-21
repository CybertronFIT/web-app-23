import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { MAX_AGE, TOKEN_NAME } from "@/constants/Cookie";
import { storeParticipant } from "@/components/database/StoreData";

export const POST = async (request: Request) => {
  const body = await request.json();

  const [status, result] = await storeParticipant(body);

  if (status !== 200) {
    console.log(status, result);
    return NextResponse.json(result, {
      status: status,
    });
  }

  const secret = process.env.JWT_SECRET_KEY || "";

  const token = sign(
    {
      id: result.id,
      name: body.name,
      mobile: body.mobile,
      email: body.email,
      year: body.year,
      department: body.department,
      college: body.college,
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  );

  const serialized = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return new NextResponse(
    JSON.stringify({
      message: "Registered",
      body: result,
    }),
    {
      status: 200,
      headers: {
        "Set-Cookie": serialized,
      },
    }
  );
};
