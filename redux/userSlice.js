import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user
    },
    userLogOut: (state, action) => {
      state.user = action.payload.user
    }
  }
});

export const { setCurrentUser, userLogOut } = userSlice.actions

export const selectUser = state => state.user
// export const selectEmail = state => state.user.email
// export const selectPhoto = state => state.user.photo

export default userSlice.reducer