import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  background: #24272e;
  transition: 0.2s all linear;
  border: 1px solid transparent;

  & > span     {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #5bb2fc;
    width: fit-content;
    align-self: center;
    transition: 0.5s all linear;
    margin-top: auto;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  & > span > .MuiButton-contained.Mui-disabled {
    background-color: #0b3558;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 960px) {
    max-width: 300px;
  }

  &:hover {
    transform: scale(1.05);
     border: 1px solid #ff5a5a;
  }
`;


const CardImage = styled.div`
  display: flex;

  height: 200px;
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
  justify-content: space-between;
  font-family: "Roboto";
  flex: 1;
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

const OfferProduct = React.memo(({ product, user }) => {
  const {
    productName,
    productDescription,
    gameType,
    prize,
    amount,
    productImg,
    device
  } = product;


  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (user.user !== null) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
      <Tooltip title={buttonDisabled ? 'Sing in to buy product' : ''} >
        <span>
          <Button
            variant='contained'
            color='secondary'
            disabled={buttonDisabled}
          >
            Add
          </Button>
        </span>
      </Tooltip>
    </Card>
  );
});

export default OfferProduct;
