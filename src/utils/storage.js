export const setThemePage = (theme) => {
  localStorage.setItem("themePage", theme);
};
export const getThemePage = () => {
  return localStorage.getItem("themePage");
};
