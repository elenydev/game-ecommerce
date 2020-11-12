import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    increaseAmount: (state, action) => {
      if (
        state.products[action.payload].amount <=
        state.products[action.payload].availableAmount
      ) {
        state.products[action.payload].amount =
          state.products[action.payload].amount + 1;
      }
    },
    decreaseAmount: (state, action) => {
      if (state.products[action.payload].amount > 1) {
        state.products[action.payload].amount =
          state.products[action.payload].amount - 1;
      } else if ((state.products[action.payload].amount = 1)) {
        state.products.splice(action.payload, 1);
      }
    },
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  addProductToCart,
} = productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
