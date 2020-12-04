import React, { useEffect } from "react";
import useAlert from "../../hooks/useAlert.js";
import useCookie from "../../hooks/useCookie.js";
import useAuth from "../../hooks/useAuth.js";
import useProducts from "../../hooks/useProducts.js";
import useArrayRange from "../../hooks/useArrayRange.js";

import Product from "../Product/index.js";
import { Button } from "@material-ui/core";
import AddProductForm from "../../components/AddProductForm/index.js";
import Alert from "../Alert/index.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import {
  Wrapper,
  OrderBox,
  Heading,
  TotalPrize,
  Footer,
} from "./productscart.styles";
import { ENDPOINT_URL } from "../../constants.js";


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
      const request = await fetch(`${ENDPOINT_URL}/orders/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      });
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
    let mounted = true;
    if (mounted) clearMessage();
    return () => {
      mounted = false;
    };
  }, [message]);

 
  useEffect(() => {
    let mounted = true;
    if (mounted) checkRanges();
    return () => {
      mounted = false;
    };
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
            <label>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={products.length < 1 && true}
                onClick={createOrder}
              >
                Click to order
              </Button>
            </label>
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
