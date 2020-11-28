import React, { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts.js";
import Image from "next/image";

import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Card,
  CardImage,
  CardContentContainer,
  CardContentHeader,
  CardContentDescription,
  CardContentInfoWrapper,
  CardContentType,
  CardContentPrize,
} from "./offerproduct.styles";

const OfferProduct = React.memo(({ product, user, setVariant, setMessage }) => {
  const {
    productName,
    productDescription,
    gameType,
    prize,
    productImg,
  } = product;


  const [buttonDisabled, setButtonDisabled] = useState(true);
  const {
    productsList: { products },
    putProductToCart,
  } = useProducts();

  useEffect(() => {
    let isMounted = true;
    if (user !== null) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

    return () => {
      isMounted = false;
    };
  }, [user]);

  const addProduct = () => {
    if (!products.includes(product)) {
      setMessage("Product added to cart");
      setVariant("success");
      putProductToCart(product);
      return;
    }
    setMessage("Product already in card");
    setVariant("error");
  };

  return (
    <>
      <Card>
        <CardImage>
          <Image
            src={`https://online-gaming-shop.herokuapp.com/images/${productImg}`}
            alt={productName}
            loading="lazy"
            width={350}
            height={300}
          />
        </CardImage>

        <CardContentContainer>
          <CardContentHeader>{productName}</CardContentHeader>

          <CardContentDescription>
            {productDescription.substring(0, 60) + "..."}
          </CardContentDescription>

          <CardContentInfoWrapper>
            <CardContentType>{gameType}</CardContentType>

            <CardContentPrize>{prize} $</CardContentPrize>
          </CardContentInfoWrapper>
        </CardContentContainer>

        <Tooltip title={buttonDisabled ? "Sing in to buy product" : ""}>
          <span>
            <label>
              <Button
                variant="contained"
                color="secondary"
                disabled={buttonDisabled}
                onClick={addProduct}
              >
                Buy
              </Button>
            </label>
          </span>
        </Tooltip>
      </Card>
    </>
  );
});

export default OfferProduct;
