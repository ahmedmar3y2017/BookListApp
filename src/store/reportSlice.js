import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "reports",
  initialState: {
    reports: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addReport: (state, action) => {
      state.reports.push(action.payload);
    },
  },
});

export const { addReport } = reportSlice.actions;
export const reportReducer = reportSlice.reducer;
