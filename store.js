// https://redux-toolkit.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
