import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import useCookie from "../../hooks/useCookie";
import { selectUser } from "../../Reducers/userSlice";
import { useSelector } from "react-redux";

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
  margin: 5px 0px;

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
    text-align: left;
  }
`;

const ProductDescription = styled.p`
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  word-break: break-word;
  text-align: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const ProductPrizeInfo = styled.div`
  display: flex;
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

const AdminProductListItem = ({ product, productIndex }) => {
  const {
    productImg,
    productName,
    prize,
    productDescription,
    gameType,
    availableAmount,
    amount,
    device,
  } = product;

  const { tokenCookie } = useCookie();
  const {
    user: { userId },
  } = useSelector(selectUser);
  const [productAmount, setProductAmount] = useState(availableAmount);
  let newAmount = 0;

  const increaseAmount = () => {
    setProductAmount(productAmount + 1);
    newAmount = productAmount + 1;
    setTimeout(() => {
      changeAmountInDatabase();
    }, 500);
  };

  const decreaseAmount = () => {
    if (productAmount - 1 < 0) {
      return;
    }
    setProductAmount(productAmount - 1);
    newAmount = productAmount + -1;
    setTimeout(() => {
      changeAmountInDatabase();
    }, 500);
  };

  const changeAmountInDatabase = async () => {
    const data = {
      productId: product._id,
      productAmount: newAmount,
      userId,
    };
    try {
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/changeAmount",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await query;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <ProductContainer>
        <ProductImage>
          <img
            src={`https://online-gaming-shop.herokuapp.com/${productImg}`}
            alt={productName}
          />
        </ProductImage>
        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>
          <ProductDescription>
            {productDescription.substring(0, 60) + "..."}
          </ProductDescription>
          <ProductDescription>Type: {gameType}</ProductDescription>
          <ProductDescription>Device: {device}</ProductDescription>
        </ProductDescriptionBox>
        <ProductPrizeInfo>
          <ProductPrice>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrice>
          <ProductAmount>
            <span>Amount: </span>
            <span> {productAmount}</span>
          </ProductAmount>

          <ActionsBox>
            <span>
              <IconButton onClick={increaseAmount}>
                <ExpandLessIcon />
              </IconButton>
            </span>
            <span>
              <IconButton onClick={decreaseAmount}>
                <ExpandMoreIcon />
              </IconButton>
            </span>
          </ActionsBox>
        </ProductPrizeInfo>
      </ProductContainer>
    </Wrapper>
  );
};

export default AdminProductListItem;
