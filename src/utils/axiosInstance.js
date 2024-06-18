import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: import.meta.env.GENERAL_API_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
