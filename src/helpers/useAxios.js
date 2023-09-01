import axios from "axios";
import Cookies from "js-cookie";
import { getToken } from "util/token";

const baseURL =
  process.env.REACT_APP_URL || "https://jsonplaceholder.typicode.com";

const useAxios = axios.create({
  baseURL: baseURL
});

useAxios.interceptors.request.use(
  (config) => {
    const authToken = getToken();
    config.headers["Authorization"] = `Bearer ${authToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

useAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status) {
      if ([401].includes(error.response.status)) {
        Cookies.remove("token");
        window.location.href = "/login";
        window.reload();
      }
    }
    return Promise.reject(error);
  }
);
export default useAxios;
