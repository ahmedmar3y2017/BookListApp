import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: null },
  reducers: {
    logInout: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      state.user = state.isLoggedIn ? { name: "ahmed marey" } : null; // example user data
    },
  },
});

export const { logInout } = authSlice.actions;

export const authReducer = authSlice.reducer;
