import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducers/user-slice"
import cartProductsReducer from "../reducers/cartproducts-slice"
import notificationsReducer from "../reducers/notifications-slice"
export default configureStore({
  reducer: {
    user: userReducer,
    cartProducts: cartProductsReducer,
    notification: notificationsReducer,
  },
})
