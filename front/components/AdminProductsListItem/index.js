import React, { useState } from "react";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { IconButton } from "@material-ui/core";
import {
  Wrapper,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductDescriptionBox,
  ProductName,
  ProductPrizeInfo,
  ProductPrize,
  ProductAmount,
  ActionsBox,
} from "./adminproductslistitem.styles";

const AdminProductListItem = (props) => {
  const { product, setMessage, setVariant, setErrorAlert } = props;
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
    currentUser: {
      user: { userId },
    },
  } = useAuth();
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
      await fetch("https://online-gaming-shop.herokuapp.com/changeAmount", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async () => {
    const data = {
      productId: product._id,
    };
    try {
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/deleteProduct",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await query.json();
      if (response.productId) {
        setVariant("success");
        setMessage("Product deleted");
      } else {
        setVariant("error");
        setMessage(response.message);
      }
    } catch (err) {
      setErrorAlert();
      console.log(err);
    }
  };

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

          <ProductDescription>
            {productDescription.substring(0, 60) + "..."}
          </ProductDescription>

          <ProductDescription>Type: {gameType}</ProductDescription>

          <ProductDescription>Device: {device}</ProductDescription>

        </ProductDescriptionBox>

        <ProductPrizeInfo>

          <ProductPrize>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrize>

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

          <ActionsBox>
            <span>
              <IconButton onClick={deleteProduct}>
                <DeleteForeverIcon />
              </IconButton>
            </span>
          </ActionsBox>

        </ProductPrizeInfo>
        
      </ProductContainer>
    </Wrapper>
  );
};

export default AdminProductListItem;
