import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://duranta-online-server.vercel.app",
  withCredentials: true,
});

export default axiosClient;
