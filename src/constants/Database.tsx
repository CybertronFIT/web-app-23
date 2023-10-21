const accessToken = process.env.REST_KEY || "";

export const custom_headers = {
  Authorization: accessToken,
};