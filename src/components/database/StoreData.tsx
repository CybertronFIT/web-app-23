import axios, { AxiosError } from "axios";
import { custom_headers } from "@/constants/Database";

const storeData = async (body: {}, route: string) => {
  const apiUrl = `https://cybertron23-winter-rest.fit-cybertron.workers.dev/${route}`;
  let response = null;

  try {
    response = await axios(apiUrl, {
      method: "POST",
      headers: custom_headers,
      data: body,
    });

    return [response.status, response.data];
  } catch (error) {
    const e = error as AxiosError;
    return e.response ? [e.response.status, e.response.data] : [500, "Server error"];
  }
};

export const storeParticipant = async (body: {}) => {
  const response = await storeData(body, "participants");
  return response;
};

export const storeTeam = async (body: {}) => {
  const response = await storeData(body, "teams");
  return response;
};