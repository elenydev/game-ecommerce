import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  box-shadow: 2px 2px 8px 0 rgb(255 90 90 /60%);
  background-color: rgba(0, 0, 0, 0.05);
  @media (min-width: 960px) {
    margin: 0;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const ProductImage = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  align-self: center;

  @media (min-width: 960px) {
    height: 100px;
    width: 100pxx;
  }

  img {
    width: 100%;
    box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
    height: auto;
  }
`;

const ProductDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  color: #5bb2fc;
  @media (min-width: 960px) {
    margin: 0 25px;
  }
`;

const ProductName = styled.h2`
  display: flex;
  margin: 10px 0;
  justify-content: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

const ProductDescription = styled.p`
  display: flex;
  font-size: 0.9em;
  justify-content: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
  }
`;

const Product = ({ product, productIndex }) => {
  const {
    productImg,
    productName,
    price,
    productDescription,
    gameType,
    amount,
  } = product;
  return (
    <Wrapper>
      <ProductContainer>
        <ProductImage>
          <img src={productImg} alt={productName} />
        </ProductImage>
        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>
          <ProductDescription>Type: {gameType}</ProductDescription>
        </ProductDescriptionBox>
      </ProductContainer>
    </Wrapper>
  );
};

export default Product;
