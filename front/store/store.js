import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user-slice.js"
import cartProductsReducer from "../reducers/cartproducts-slice.js"
import notificationsReducer from "../reducers/notifications-slice.js"
export default configureStore({
  reducer: {
    user: userReducer,
    cartProducts: cartProductsReducer,
    notification: notificationsReducer,
  },
})
