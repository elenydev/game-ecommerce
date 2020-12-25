import React, { useEffect, useState } from "react"
import {
  Product,
  Order,
  Subscribtion,
  Email,
} from "../interfaces/dataInterfaces"

type Arr = Product[] | Order[] | Subscribtion[] | Email[]

const useArrayRange = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(4)
  const [startRange, setStartRange] = useState<number>(1)
  const [endRange, setEndRange] = useState<number>(visibleProducts)
  let arrayLength = 0

  const incrementRange = (): void => {
    if (endRange >= arrayLength) return
    setStartRange(startRange + visibleProducts)

    if (endRange + visibleProducts >= arrayLength) {
      setEndRange(arrayLength)
      setStartRange(arrayLength - visibleProducts + 1)
      return
    } else {
      setEndRange(endRange + visibleProducts)
    }
  }

  const handleProductsArrayRange = (
    arr: Product[],
    categoryDisplayed: string
  ): {
    arrayLength: number
    currentCategoryProducts: Product[]
  } => {
    const array: Product[] = arr.filter(
      (product: Product) =>
        product.device === categoryDisplayed && product.availableAmount > 0
    )
    arrayLength = array.length
    const currentCategoryProducts = array.slice(startRange - 1, endRange)
    return { arrayLength, currentCategoryProducts }
  }

  const handleArrayRange = (
    arr: Arr
  ): { slicedArray: any[]; arrayLength: number } => {
    arrayLength = arr.length
    const slicedArray = arr.slice(startRange - 1, endRange)
    return { slicedArray, arrayLength }
  }

  const decrementRange = (): void => {
    if (startRange <= 1) return
    if (startRange - visibleProducts <= 0) {
      setStartRange(1)
      setEndRange(visibleProducts)
      return
    }
    setStartRange(startRange - visibleProducts)
    if (endRange - visibleProducts < visibleProducts) {
      setEndRange(visibleProducts)
    } else {
      setEndRange(endRange - visibleProducts)
    }
  }

  const checkRanges = (): void => {
    setStartRange(1)
    setEndRange(visibleProducts)
    if (visibleProducts > arrayLength) {
      setEndRange(arrayLength)
    } else {
      setEndRange(visibleProducts)
    }
    if (endRange > arrayLength) {
      setStartRange(1)
      setEndRange(arrayLength)
    }
  }

  useEffect(() => {
    let isMounted = true
    checkRanges()
    return () => {
      isMounted = false
    }
  }, [visibleProducts])

  return {
    visibleProducts,
    setVisibleProducts,
    startRange,
    endRange,
    checkRanges,
    incrementRange,
    decrementRange,
    handleProductsArrayRange,
    handleArrayRange,
  }
}

export default useArrayRange
