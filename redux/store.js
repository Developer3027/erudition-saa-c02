import { configureStore } from '@reduxjs/toolkit';
import prefSlice from "./prefSlice";
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    pref: prefSlice
  }
})