import axios, { AxiosError } from "axios";

/**
 * getUserDetails function fetches user details from the provided API URL.
 * @param {string} apiURL - The API URL to fetch user details from.
 * @returns {Array} - An array containing the result object and a boolean success flag.
 */
export const fetchUserData = async (apiURL: string) => {
  let result = null;
  let success = false;
  try {
    const response = await axios(apiURL, {
      headers: {
        Authorization: process.env.REST_KEY!,
      },
    });
    result = response.data;
    success = true;
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.response?.data);
    if (e.response?.status == 404) {
      result = {
        message: "Credentials does not match!",
        status: 404,
        data: null,
      };
    } else {
      result = {
        message: "Something Went Wrong!",
        status: 500,
        data: null,
      };
    }
  }

  return [result, success];
};

export async function fetchTeamData(
  route: string
): Promise<
  { name: string; image: string; role: string; mobile: string }[] | null
> {
  const apiURL = process.env.BACKEND_URL + route;

  const [result, success] = await fetchUserData(apiURL);

  if (!success) {
    return null;
  }

  const { results } = result;

  return results;
}
