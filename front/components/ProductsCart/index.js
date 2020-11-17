import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/index.js";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { clearCart, selectProducts } from "../../Reducers/productsSlice.js";
import { selectUser } from "../../Reducers/userSlice.js";
import AddProductForm from "../../components/AddProductForm/index.js";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert.js";

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
  padding: 40px;
  color: rgb(255 90 90 /90%);
`;

const TotalPrize = styled.p`
  color: rgb(255 90 90 /90%);
  align-self: flex-end;
  font-size: 1.2em;
  margin: 20px;

  @media (min-width: 960px) {
    margin: 20px 40px;
  }
`;

const ProductsCart = () => {
  const { products } = useSelector(selectProducts);
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();

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
    };
    try {
      const request = await fetch(
        "https://online-gaming-shop.herokuapp.com/createOrder",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await request.json();
      if (response.order) {
        dispatch(clearCart());
        setVariant("success");
        setMessage("Order created");
      }
      if (response.message) {
        setErrorAlert();
      }
    } catch (err) {
      setErrorAlert();
    }
  };

   
  useEffect(() => {
    clearMessage();
  }, [message]);


  return (
    <Wrapper>
      {user.email === "admin@admin.com" && <AddProductForm />}
      {user.email !== "admin@admin.com" && products.length >= 1 ? (
        <>
          <Heading>Your products: </Heading>
          {products.map((product, index) => (
            <Product key={index} product={product} productIndex={index} />
          ))}
          <TotalPrize>Total prize: {getPrize()} $</TotalPrize>
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
