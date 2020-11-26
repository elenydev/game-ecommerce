import React from "react";
import useProducts from "../../hooks/useProducts.js";
import Image from "next/image";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import {
  Wrapper,
  ProductContainer,
  ProductImage,
  ProductDescriptionBox,
  ProductName,
  ProductDescription,
  ProductPrizeInfo,
  ProductPrize,
  ProductAmount,
  ActionsBox,
} from "./product.styles";


const Product = ({ product, productIndex }) => {
  const { increaseProductAmount, decreaseProductAmount } = useProducts();
  const {
    productImg,
    productName,
    prize,
    productDescription,
    gameType,
    amount,
  } = product;

  return (
    <Wrapper>
      <ProductContainer>
        <ProductImage>
          <img
            src={`https://online-gaming-shop.herokuapp.com/images/${productImg}`}
            alt={productName}
          />
        </ProductImage>

        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>

          <ProductDescription>Type: {gameType}</ProductDescription>
        </ProductDescriptionBox>

        <ProductPrizeInfo>
          <ProductPrize>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrize>

          <ProductAmount>
            <span>Amount: </span>
            <span> {amount}</span>
          </ProductAmount>

          <ActionsBox>
            <span>
              <IconButton onClick={() => increaseProductAmount(productIndex)}>
                <ExpandLessIcon />
              </IconButton>
            </span>

            <span>
              <IconButton onClick={() => decreaseProductAmount(productIndex)}>
                <ExpandMoreIcon />
              </IconButton>
            </span>
          </ActionsBox>
        </ProductPrizeInfo>
      </ProductContainer>
    </Wrapper>
  );
};

export default Product;
