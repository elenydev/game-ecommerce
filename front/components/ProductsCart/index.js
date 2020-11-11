import React, { useEffect } from "react";
import styled from "styled-components";
import Product from "../Product/index.js";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { selectProducts } from "../../Reducers/productsSlice.js";
import { selectUser } from "../../Reducers/userSlice.js";
import AddProductForm from "../../components/AddProductForm/index.js";

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
  console.log(user.email);

  return (
    <Wrapper>
      {user.email === "admin@admin.com" && <AddProductForm />}
      {products.length >= 1 ? (
        <>
          {products.map((product, index) => (
            <Product key={index} product={product} productIndex={index} />
          ))}
          <TotalPrize>Total prize: 12$</TotalPrize>
        </>
      ) : (
        <Heading>No products in cart</Heading>
      )}
      <>
        <OrderBox>
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            disabled={products.length < 1 && true}
          >
            Click to order
          </Button>
        </OrderBox>
      </>
    </Wrapper>
  );
};

export default ProductsCart;
