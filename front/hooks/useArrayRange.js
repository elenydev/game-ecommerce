import React, { useEffect, useState } from "react";

const useArrayRange = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(visibleProducts);
  let arrayLength = 0;

  const incrementRange = () => {
    if (endRange >= arrayLength) return;
    setStartRange(startRange + visibleProducts);

    if (endRange + visibleProducts >= arrayLength) {
      setEndRange(arrayLength);
      setStartRange(arrayLength - visibleProducts + 1);
      return;
    } else {
      setEndRange(endRange + visibleProducts);
    }
  };

  const handleProductsArrayRange = (arr, categoryDisplayed) => {
    const array = arr.filter(
      (product) =>
        product.device === categoryDisplayed && product.availableAmount > 0
    );
    arrayLength = array.length;
    const currentCategoryProducts = array.slice(startRange - 1, endRange);
    return { arrayLength, currentCategoryProducts };
  };

  const handleArrayRange = (subscribtions) => {
    arrayLength = subscribtions.length;
    const slicedArray = subscribtions.slice(startRange - 1, endRange);
    return { slicedArray, arrayLength };
  };

  const decrementRange = () => {
    if (startRange <= 1) return;
    if (startRange - visibleProducts <= 0) {
      setStartRange(1);
      setEndRange(visibleProducts);
      return;
    }
    setStartRange(startRange - visibleProducts);
    if (endRange - visibleProducts < visibleProducts) {
      setEndRange(visibleProducts);
    } else {
      setEndRange(endRange - visibleProducts);
    }
  };

  const checkRanges = () => {
    setStartRange(1);
    setEndRange(visibleProducts);
    if (visibleProducts > arrayLength) {
      setEndRange(arrayLength);
    } else {
      setEndRange(visibleProducts);
    }
    if (endRange > arrayLength) {
      setStartRange(1);
      setEndRange(arrayLength);
    }
  };

  useEffect(() => {
    let isMounted = true;
    checkRanges();
    return () => {
      isMounted = false;
    };
  }, [visibleProducts]);

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
  };
};

export default useArrayRange;
