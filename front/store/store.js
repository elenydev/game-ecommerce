import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userSlice.js";
import productsReducer from "../Reducers/productsSlice.js";
export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});
