import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../interfaces/dataInterfaces"

export const cartProductsSlice = createSlice({
  name: "products",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    increaseAmount: (state, action: { payload: number }) => {
      if (
        state.cartProducts[action.payload].amount <=
        state.cartProducts[action.payload].availableAmount
      ) {
        state.cartProducts[action.payload].amount =
          state.cartProducts[action.payload].amount + 1
      }
    },
    decreaseAmount: (state, action: { payload: number }) => {
      if (state.cartProducts[action.payload].amount > 1) {
        state.cartProducts[action.payload].amount =
          state.cartProducts[action.payload].amount - 1
      } else if ((state.cartProducts[action.payload].amount = 1)) {
        state.cartProducts.splice(action.payload, 1)
      }
    },
    addProductToCart: (state, action: { payload: Product }) => {
      state.cartProducts.push(action.payload)
    },
    clearCart: (state) => {
      state.cartProducts = []
    },
  },
})

export const {
  increaseAmount,
  decreaseAmount,
  addProductToCart,
  clearCart,
} = cartProductsSlice.actions

export const selectCartProducts = (state: {
  cartProducts: { cartProducts: Product[] }
}) => state.cartProducts

export default cartProductsSlice.reducer
