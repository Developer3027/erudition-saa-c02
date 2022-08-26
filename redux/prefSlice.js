import { createSlice } from "@reduxjs/toolkit";

export const prefSlice = createSlice({
  name: 'pref',
  initialState: {
    preference: {
      quizShow: true
    }
  },
  reducers: {
    quizOn: (state) => {
      state.preference.quizShow = true
    },
    quizOff: (state) => {
      state.preference.quizShow = false
    }
  }
});

export const { quizOn, quizOff } = prefSlice.actions;

export default prefSlice.reducer;