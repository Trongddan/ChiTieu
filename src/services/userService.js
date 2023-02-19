import { getRequest, postRequest, putRequest } from "../api/apiCaller";

import { apiPath } from "../config/apiPath";
import { getId } from "../utils/storage";
export const user_id = getId();
export const registerUser = (params, successCallback, errorCallBack) => {
  postRequest(apiPath.register, params, successCallback, errorCallBack);
};
export const loginUser = (params, successCallback, errorCallBack) => {
  postRequest(apiPath.login, params, successCallback, errorCallBack);
};
export const addCoin = (params, successCallback, errorCallBack) => {
  putRequest(apiPath.addCoin+"/"+user_id, params, successCallback, errorCallBack);
};
export const getUser = (params, successCallback, errorCallBack) => {
  getRequest(apiPath.getUserById+"/"+user_id, params, successCallback, errorCallBack);
};
