import axios from "axios";
import { getAccessToken } from "../utils/storage";
axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearr ${token}`;
  }
  return config;
});
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      return reject(err);
    });
  }
);
export const getRequest = (
  url = "",
  params,
  successCallback,
  errorCallBack,
  timeout
) => {
  return axios
    .get(url, { params, timeout })
    .then((res) => {
      if (successCallback) {
        try {
          successCallback(res);
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((err) => {
      if (errorCallBack) {
        try {
          errorCallBack(err);
        } catch (error) {
          console.log(error);
        }
      }
    });
};
export const postRequest = (
  url = "",
  params,
  successCallback,
  errorCallBack
) => {
  return axios
    .post(url, params)
    .then((res) => {
      if (successCallback) {
        try {
          successCallback(res);
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((err) => {
      if (errorCallBack) {
        try {
          errorCallBack(err);
        } finally {
          console.log(err);
        }
      }
    });
};
export const putRequest = (
  url = "",
  params,
  successCallback,
  errorCallback
) => {
  return axios
    .put(url, params)
    .then((res) => {
      if (successCallback) {
        try {
          successCallback(res);
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((err) => {
      if (errorCallback) {
        try {
          errorCallback(err);
        } finally {
          console.log(err);
        }
      }
    });
};
