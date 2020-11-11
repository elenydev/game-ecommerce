import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    increaseAmount: (state, action) => {
      state.products[action.payload].amount =
        state.products[action.payload].amount + 1;
    },
    decreaseAmount: (state, action) => {
      if (state.products[action.payload].amount > 1) {
        state.products[action.payload].amount =
          state.products[action.payload].amount - 1;
      } else if ((state.products[action.payload].amount = 1)) {
        state.products.splice(action.payload, 1);
      }
    },
  },
});

export const { increaseAmount, decreaseAmount } = productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
