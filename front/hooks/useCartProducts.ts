import { useDispatch, useSelector } from "react-redux"
import {
  selectCartProducts,
  increaseAmount,
  decreaseAmount,
  addProductToCart,
  clearCart,
} from "../reducers/cartproducts-slice"
import { Product } from "../interfaces/dataInterfaces"

const useCartProducts = () => {
  const dispatch = useDispatch()
  const cartProductsList: Product[] = useSelector(selectCartProducts)

  const clearProducts = () => dispatch(clearCart())
  const putProductToCart = (product: Product) =>
    dispatch(addProductToCart(product))
  const increaseProductAmount = (index: number) =>
    dispatch(increaseAmount(index))
  const decreaseProductAmount = (index: number) =>
    dispatch(decreaseAmount(index))

  return {
    cartProductsList,
    clearProducts,
    putProductToCart,
    increaseProductAmount,
    decreaseProductAmount,
  }
}

export default useCartProducts
