import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { MAX_AGE, TOKEN_NAME, secret } from "@/constants/Cookie";
import {
  fetchAdminData,
  fetchParticipantData,
} from "@/components/database/FetchData";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { id, collection } = body;

  let result = null;
  let token = "";

  if (collection === "Members") {
    result = await fetchAdminData(`members/${encodeURIComponent(id)}`);

    if (!result) {
      console.log(result);
      return NextResponse.json("Not Found", {
        status: 404,
      });
    }

    const { name, role, mobile } = result[0];

    token = sign(
      {
        id: id,
        name: name,
        role: role,
        mobile: mobile,
      },
      secret,
      {
        expiresIn: MAX_AGE,
      }
    );
  } else {
    result = await fetchParticipantData( "/" + encodeURIComponent(id));

    if (!result) {
      console.log(result);
      return NextResponse.json("Not Found", {
        status: 404,
      });
    }

    try {
      const { name, mobile, email, year, department, college } = result[0];

      token = sign(
        {
          id: id,
          name: name,
          mobile: mobile,
          email: email,
          year: year,
          department: department,
          college: college,
        },
        secret,
        {
          expiresIn: MAX_AGE,
        }
      );
    } catch (error) {
      console.log(error);
      console.error(error);
      return NextResponse.json(error, {
        status: 402,
      });
    }
  }

  try {
    const serialized = serialize(TOKEN_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    return new NextResponse(
      JSON.stringify({
        message: "Authorized",
        body: result,
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": serialized,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, {
      status: 402,
    });
  }
};
