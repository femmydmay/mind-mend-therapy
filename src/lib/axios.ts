import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // No need for @ts-expect-error since this is valid
  // headers: { "Content-Type": "application/json" },
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // No need for @ts-expect-error since this is valid
  // headers: { "Content-Type": "application/json" },
});
