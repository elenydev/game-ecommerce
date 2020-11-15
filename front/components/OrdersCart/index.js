import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Order from "../Order/index.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 40px;
  color: rgb(255 90 90 /90%);
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(255 90 90 /60%);
  border-right: none;
  border-left: none;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const OrdersCart = ({ orders }) => {
  return (
    <Wrapper>
      {orders && orders.length === 0 ? (
        <Heading>We don't have any orders</Heading>
      ) : (
        <>
          <Heading>Orders: </Heading>
          {orders.map((order, index) => (
            <OrderWrapper key={index}>
              <Order specificOrder={order} index={index} />
            </OrderWrapper>
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default OrdersCart;
