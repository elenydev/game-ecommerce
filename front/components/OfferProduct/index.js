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
import { ENDPOINT_URL } from "../../constants.js";

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
  
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (user !== null) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
    return () => {
      mounted = false;
    };
  }, [user]);

  return (
    <>
      <Card>
        <CardImage>
          <Image
            src={`${ENDPOINT_URL}/images/${productImg}`}
            alt={productName}
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
