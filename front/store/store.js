import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userSlice.js";
import cartProductsReducer from "../Reducers/cartProductsSlice.js"
export default configureStore({
  reducer: {
    user: userReducer,
    cartProducts: cartProductsReducer,
  },
})
