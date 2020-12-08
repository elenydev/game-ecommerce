import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userSlice.js";
import cartProductsReducer from "../Reducers/cartProductsSlice.js"
import notificationsReducer from "../Reducers/notificationsSlice.js"
export default configureStore({
  reducer: {
    user: userReducer,
    cartProducts: cartProductsReducer,
    notification: notificationsReducer,
  },
})
