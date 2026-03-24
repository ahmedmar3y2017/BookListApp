import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./bookSlice";

const store = configureStore({
  reducer: {
    books: reducer,
  },
});

export default store;
