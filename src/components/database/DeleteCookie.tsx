import axios, { AxiosError } from "axios";

export async function logOut() {
  try {
    const response = await axios("/api/auth/logout");
    console.log(response);
  } catch (error) {
    const e = error as AxiosError;
    if (e.response) {
      console.error(e.response);
    }
  }
}