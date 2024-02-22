"use server";

import axios, { AxiosError } from "axios";

const SignupParticipant = async (data: {}) => {
  let response = null;

  const apiURL = process.env.BACKEND_URL! + "/participants";

  try {
    response = await axios.post(apiURL, data, {
      headers: {
        Authorization: process.env.REST_KEY!,
      },
    });
  } catch (error) {
    const e = error as AxiosError;
    console.error(e.response?.data);
    if (e.response?.status === 409) {
      return {
        message: "Provided mobile already exists",
        status: 409,
        data: null,
      };
    }
    return {
      message: "Something Went Wrong!",
      status: 500,
      data: null,
    };
  }

  const result = response.data;

  // TODO: Send mail

  return {
    message: "Register Successfull",
    status: 200,
    data: result,
  };
};


export default SignupParticipant;