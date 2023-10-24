const accessToken = process.env.REST_KEY || "";

export const API_URL = "https://cybertron23-winter-rest.fit-cybertron.workers.dev/";

export const custom_headers = {
  Authorization: accessToken,
};