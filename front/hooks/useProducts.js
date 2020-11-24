import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  increaseAmount,
  decreaseAmount,
  addProductToCart,
  clearCart,
} from "../Reducers/productsSlice.js";

const useAuth = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(selectProducts);

  const clearProducts = () => dispatch(clearCart);
  const putProductToCart = (product) => dispatch(addProductToCart(product));
  const increaseProductAmount = (index) => dispatch(increaseAmount(index));
  const decreaseProductAmount = (index) => dispatch(decreaseAmount(index));

  return {
    productsList,
    clearProducts,
    putProductToCart,
    increaseProductAmount,
    decreaseProductAmount,
  };
};

export default useAuth;
