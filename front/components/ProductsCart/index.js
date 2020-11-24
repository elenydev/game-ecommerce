import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/index.js";
import { Button } from "@material-ui/core";
import AddProductForm from "../../components/AddProductForm/index.js";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert.js";
import useCookie from "../../hooks/useCookie.js";
import useAuth from "../../hooks/useAuth.js";
import useProducts from "../../hooks/useProducts.js";
import useArrayRange from "../../hooks/useArrayRange.js";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const OrderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 10px;
  color: rgb(255 90 90 /90%);
`;

const TotalPrize = styled.p`
  color: rgb(255 90 90 /90%);
  align-self: flex-end;
  font-size: 1.2em;
  margin: 20px;
  border-bottom: 1px solid rgb(255 90 90 /60%);

  @media (min-width: 960px) {
    margin: 20px 40px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  padding: 10px;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1em;
  }

  & > div > div > p > select {
    background-color: #24272e;
    color: white;
    font-size: 1em;
  }

  .MuiIconButton-root {
    color: white;
  }
`;

const ProductsCart = () => {
  const {
    productsList: { products },
    clearProducts,
  } = useProducts();
  const {
    currentUser: { user },
  } = useAuth();
  const { tokenCookie } = useCookie();
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();

  const {
    startRange,
    endRange,
    incrementRange,
    decrementRange,
    checkRanges,
    handleArrayRange,
  } = useArrayRange();
  const { slicedArray, arrayLength } = handleArrayRange(products);

  const getPrize = () => {
    let prize = 0;
    products.map((product) => {
      prize = prize + product.amount * product.prize;
    });
    return prize;
  };

  const createOrder = async () => {
    const data = {
      products,
      user,
      prize: getPrize(),
      userId: user.userId,
    };
    try {
      const request = await fetch(
        "https://online-gaming-shop.herokuapp.com/createOrder",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await request.json();
      if (response.order) {
        clearProducts();
        setVariant("success");
        setMessage("Order created");
      }
      if (response.message) {
        setErrorAlert();
      }
      if (response.unavailableProducts) {
        setVariant("error");
        setMessage(response.unavailableProducts);
      }
    } catch (err) {
      setErrorAlert();
    }
  };

  useEffect(() => {
    clearMessage();
  }, [message]);

  useEffect(() => {
    checkRanges();
  }, [products]);

  return (
    <Wrapper>
      {user.email === "admin@admin.com" && <AddProductForm />}
      {user.email !== "admin@admin.com" && products.length >= 1 ? (
        <>
          <Heading>Your products: </Heading>
          {slicedArray.map((product, index) => (
            <Product key={index} product={product} productIndex={index} />
          ))}
          <TotalPrize>Total prize: {getPrize()} $</TotalPrize>
          {products.length > 0 && (
            <Footer>
              <FooterContent>
                <FooterRows>
                  <Paragraph>
                    <Span>{startRange}</Span>
                    <Span>-</Span>
                    <Span>{endRange}</Span>
                    <Span>of</Span>
                    <Span> {arrayLength} </Span>
                  </Paragraph>
                  <Paragraph>
                    <Span>
                      <IconButton onClick={() => decrementRange()}>
                        <KeyboardArrowLeftIcon />
                      </IconButton>
                    </Span>
                    <Span>
                      <IconButton onClick={() => incrementRange()}>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Span>
                  </Paragraph>
                </FooterRows>
              </FooterContent>
            </Footer>
          )}
        </>
      ) : (
        user.email !== "admin@admin.com" && (
          <Heading>No products in cart</Heading>
        )
      )}

      <>
        {user.email !== "admin@admin.com" && (
          <OrderBox>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={products.length < 1 && true}
              onClick={createOrder}
            >
              Click to order
            </Button>
          </OrderBox>
        )}
      </>
      {message && (
        <Alert variant={variant} shouldOpen={true} message={message} />
      )}
    </Wrapper>
  );
};

export default ProductsCart;
