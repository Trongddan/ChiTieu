import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  themePage: false,
  isAddcoin: true,
};
const appReducer = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setThemePageFlag: (state, actions) => {
      state.themePage = !state.themePage;
    },
    setUserCoin: (state, actions) => {
      state.isAddcoin = !state.isAddcoin;
    }
  },
});
export const { setThemePageFlag, setUserCoin } = appReducer.actions;
export default appReducer.reducer;
