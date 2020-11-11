import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  background: #24272e;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #5bb2fc;
    width: fit-content;
    align-self: center;
    transition: 0.3s all linear;
    margin-top: auto;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  @media (min-width: 960px) {
    max-width: 300px;
  }
`;

const CardImage = styled.div`
  display: flex;

  height: 150px;
  width: auto;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 960px) {
    height: 280px;
    width: auto;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Roboto";
  @media (min-width: 960px) {
    padding: 12px;
  }
`;

const CardContentHeader = styled.h4`
  width: 100%;
  font-size: 1.4em;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  margin-top: 5px;
`;

const CardContentDescription = styled.p`
  display: block;
  width: 100%;
  margin: 8px 0px;
  word-break: break-word;
`;

const CardContentInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  font-size: 1.3em;
`;

const CardContentType = styled.p`
  display: flex;
  width: 65%;
`;

const CardContentPrize = styled.p`
  display: flex;
  width: 35%;
  justify-content: flex-end;
`;

const OfferProduct = ({ product }) => {
  const {
    productName,
    productDescription,
    gameType,
    prize,
    amount,
    productImg,
  } = product;
  return (
    <Card>
      <CardImage>
        <img src={`http://localhost:8080/${productImg}`} alt={productName} />
      </CardImage>
      <CardContentContainer>
        <CardContentHeader>{productName}</CardContentHeader>
        <CardContentDescription>{productDescription}</CardContentDescription>
        <CardContentInfoWrapper>
          <CardContentType>{gameType}</CardContentType>
          <CardContentPrize>{prize} $</CardContentPrize>
        </CardContentInfoWrapper>
      </CardContentContainer>
      <Button variant='contained' color='secondary'>
        Add
      </Button>
    </Card>
  );
};

export default OfferProduct;
