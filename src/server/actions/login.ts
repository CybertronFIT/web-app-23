"use server";

import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { fetchUserData } from "@/server/fetch-data";
import { MAX_AGE, TOKEN_NAME, JWT_SECRET } from "@/components/constants/cookie";


/**
 * AdminLogin function handles the admin login process.
 * @param {Object} data - An object containing the admin ID and secret.
 * @returns {Object} - An object containing the message, status, and data.
 */
export const AdminLogin = async (data: { id: string; secret: string }) => {
  const { id, secret } = data;

  const apiURL =
    process.env.BACKEND_URL! + "/members/" + encodeURIComponent(id);

  if (secret !== process.env.ADMIN_SECRET) {
    return {
      message: "Incorrect Admin Secret!",
      status: 404,
      data: null,
    };
  }

  const [result, success] = await fetchUserData(apiURL);

  if (!success) {
    return result;
  }

  const token = sign(
    {
      id: id,
    },
    JWT_SECRET,
    {
      expiresIn: MAX_AGE,
    }
  );

  cookies().set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return {
    message: "Login Successfull",
    status: 200,
    data: result.results[0],
  };
};

/**
 * ParticipantLogin function handles the participant login process.
 * @param {Object} data - An object containing the participant ID and mobile number.
 * @returns {Object} - An object containing the message, status, and data.
 */
export const ParticipantLogin = async (data: {
  id: string;
  mobile: string;
}) => {
  const { id, mobile } = data;

  const apiURL =
    process.env.BACKEND_URL! + "/participants/" + encodeURIComponent(id);

  const [result, success] = await fetchUserData(apiURL);

  if (!success) {
    return result;
  }

  // Check provided phone number with database phone number
  if (mobile !== result.results[0].mobile) {
    return {
      message: "Credentials does not match!",
      status: 404,
      data: null,
    };
  }

  const token = sign(
    {
      id: id,
    },
    JWT_SECRET,
    {
      expiresIn: MAX_AGE,
    }
  );

  cookies().set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return {
    message: "Login Successfull",
    status: 200,
    data: result.results[0],
  };
};
