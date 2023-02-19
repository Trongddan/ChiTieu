export const setThemePage = (theme) => {
  localStorage.setItem("themePage", theme);
};
export const getThemePage = () => {
  return localStorage.getItem("themePage");
};
export const setCoinLocal = (coin) => {
  localStorage.setItem("coin", coin);
};
export const setUserInfo = (user) => {
  console.log(user.username);
  localStorage.setItem("username", user.username);
  localStorage.setItem("access_token",user.accessToken)
  localStorage.setItem("_id", user._id);
};
export const getUser = () => {
  return localStorage.getItem("username");
};
export const getCoin = () => {
  return localStorage.getItem("coin");
};
export const getId = () => {
  return localStorage.getItem("_id");
};
export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};
