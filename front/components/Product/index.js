import React from "react";
import styled from "styled-components";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "../../Reducers/productsSlice";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 0;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  border: 1px solid rgb(255 90 90 /60%);
  border-right: none;
  border-left: none;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const ProductImage = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  align-self: center;

  @media (min-width: 960px) {
    height: 150px;
    min-width: 150px;
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
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
    max-width: 450px;
  }
`;

const ProductName = styled.h2`
  display: flex;
  margin: 10px 0;
  justify-content: center;
  text-align: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
  }
`;

const ProductDescription = styled.p`
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  word-break: break-word;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const ProductPrizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  justify-content: space-between;
  color: rgb(255 90 90 /90%);

  @media (min-width: 960px) {
    flex-direction: row;
    margin-left: auto;
  }
`;

const ProductPrice = styled.p`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.4em;
  @media (min-width: 960px) {
    margin: 0;
  }
`;

const ProductAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    display: block;
  }

  @media (min-width: 960px) {
    margin: 0 20px;
  }
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;

  span {
    display: flex;
    color: rgb(255 90 90 /80%);
  }
`;

const Product = ({ product, productIndex }) => {
  const dispatch = useDispatch();

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
          <img src={`http://localhost:8080/${productImg}`} alt={productName} />
        </ProductImage>
        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>
          <ProductDescription>Type: {gameType}</ProductDescription>
        </ProductDescriptionBox>
        <ProductPrizeInfo>
          <ProductPrice>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrice>
          <ProductAmount>
            <span>Amount: </span>
            <span> {amount}</span>
          </ProductAmount>

          <ActionsBox>
            <span>
              <IconButton
                onClick={() => dispatch(increaseAmount(productIndex))}
              >
                <ExpandLessIcon />
              </IconButton>
            </span>
            <span>
              <IconButton
                onClick={() => dispatch(decreaseAmount(productIndex))}
              >
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
