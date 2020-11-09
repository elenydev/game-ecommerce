import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userSlice.js";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
