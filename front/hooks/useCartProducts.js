import { useDispatch, useSelector } from "react-redux"
import {
  selectCartProducts,
  increaseAmount,
  decreaseAmount,
  addProductToCart,
  clearCart,
} from "../reducers/cartProductsSlice.js"

const useCartProducts = () => {
  const dispatch = useDispatch()
  const cartProductsList = useSelector(selectCartProducts)

  const clearProducts = () => dispatch(clearCart())
  const putProductToCart = (product) => dispatch(addProductToCart(product))
  const increaseProductAmount = (index) => dispatch(increaseAmount(index))
  const decreaseProductAmount = (index) => dispatch(decreaseAmount(index))

  return {
    cartProductsList,
    clearProducts,
    putProductToCart,
    increaseProductAmount,
    decreaseProductAmount,
  }
}

export default useCartProducts
