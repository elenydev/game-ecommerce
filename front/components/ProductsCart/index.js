import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/index.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProductsCart = () => {
  const products = [
    {
      productImg:
        "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      productName: "Fortnite ",
      price: 20,
      productDescription: "Very nice game :)",
      gameType: "XD",
      amount: 1,
    },
  ];
  return (
    <Wrapper>
      {products.map((product, index) => (
        <Product key={index} product={product} productIndex={index} />
      ))}
    </Wrapper>
  );
};

export default ProductsCart;
