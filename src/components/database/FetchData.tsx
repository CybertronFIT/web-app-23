import axios, { AxiosError } from "axios";
import { API_URL, custom_headers } from "@/constants/Database";

export async function fetchAdminData(
  route: string
): Promise<
  { name: string; image: string; role: string; mobile: string }[] | null
> {
  const api_endpoint = API_URL + route;

  let response = null;

  try {
    response = await axios(api_endpoint, {
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
    const e = error as AxiosError;
    if (e.response) {
      console.error(
        "Response Status: " +
          e.response.status +
          " | Message: " +
          e.response.data
      );
    }
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
  const api_endpoint = `${API_URL}participants${route}`;

  let response = null;

  try {
    response = await axios(api_endpoint, {
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

export async function fetchEventData(route: string): Promise<
  | {
      title: string;
      page: string;
      image: string;
    }[]
  | null
> {
  const api_endpoint = API_URL + route;

  let response = null;

  try {
    response = await axios(api_endpoint, {
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

export async function fetchTeamData(route: string): Promise<
  | {
      teamName: string;
      eventName: string;
      paymentID: string;
      screenShot: string;
      newsSource: string;
      teamLeader: string;
      member1: string;
      member2: string;
      member3: string;
    }[]
  | null
> {
  const api_endpoint = `${API_URL}teams${route}`;

  let response = null;

  try {
    response = await axios(api_endpoint, {
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
