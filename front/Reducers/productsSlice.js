import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        productImg:
          "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        productName: "Fortnite ",
        price: 20,
        productDescription: "Very nice game :)",
        gameType: "XD",
        amount: 1,
      },
    ],
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
