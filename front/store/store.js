import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice.js"
import cartProductsReducer from "../reducers/cartProductsSlice.js"
import notificationsReducer from "../reducers/notificationsSlice.js"
export default configureStore({
  reducer: {
    user: userReducer,
    cartProducts: cartProductsReducer,
    notification: notificationsReducer,
  },
})
