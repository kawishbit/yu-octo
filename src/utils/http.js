import axios from "axios";
import { useLoadingStore } from "@/stores/loading";
import { API_URL } from "constants";

const loadingStore = useLoadingStore();

const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    loadingStore.start();
    return config;
  },
  (error) => {
    loadingStore.stop();
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    loadingStore.stop();
    return response;
  },
  (error) => {
    loadingStore.stop();
    return Promise.reject(error);
  }
);

export const getRequest = async (endpoint, options = {}) => {
  return await axios.get(`${endpoint}`, options);
};
export const postRequest = async (endpoint, data = null, options = null) => {
  return await axios.post(`${endpoint}`, data, options);
};
export const patchRequest = async (endpoint, data = null, options = null) => {
  return await axios.patch(`${endpoint}`, data, options);
};
export const putRequest = async (endpoint, data = null, options = null) => {
  return await axios.put(`${endpoint}`, data, options);
};
export const deleteRequest = async (endpoint, options = null) => {
  return await axios.delete(`${endpoint}`, options);
};

export default http;
