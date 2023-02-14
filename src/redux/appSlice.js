import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  themePage: false,
};
const appReducer = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setThemePageFlag: (state, actions) => {
      state.themePage = !state.themePage;
    },
  },
});
export const { setThemePageFlag } = appReducer.actions;
export default appReducer.reducer;
