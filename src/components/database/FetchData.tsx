import axios from "axios";
import { custom_headers } from "@/constants/Database";


export async function fetchAdminData(
  route: string
): Promise<
  { name: string; role: string; image: string; mobile: string }[] | null
> {
  const apiUrl = `https://cybertron23-winter-rest.fit-cybertron.workers.dev/${route}`;

  let response = null;

  try {
    response = await axios(apiUrl, {
      method: "GET",
      headers: custom_headers,
    });

    if (response.status === 200) {
      const { results } = await response.data;
      return results;
    } else {
      console.error("Response status: ", response.status);
      return null;
    }
  } catch (error) {
    console.error(response?.status);
    return null;
  }
}

export async function fetchParticipantData(route: string): Promise<
  | {
      name: string;
      mobile: string;
      email: string;
      year: string;
      department: string;
      college: string;
    }[]
  | null
> {
  const apiUrl = `https://cybertron23-winter-rest.fit-cybertron.workers.dev/participants/${route}`;

  let response = null;

  try {
    response = await axios(apiUrl, {
      method: "GET",
      headers: custom_headers,
    });

    if (response.status === 200) {
      const { results } = await response.data;
      return results;
    } else {
      console.error("Response status: ", response.status);
      return null;
    }
  } catch (error) {
    console.error(response?.status);
    return null;
  }
}
