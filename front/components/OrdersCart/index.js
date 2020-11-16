import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import Order from "../Order/index.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import useArrayRange from "../../hooks/useArrayRange.js";

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
`;


const OrdersCart = ({ orders }) => {
  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = useArrayRange();

  const { slicedArray, arrayLength } = handleArrayRange(orders);

  return (
    <Wrapper>
      {orders && orders.length === 0 ? (
        <Heading>We don't have any orders</Heading>
      ) : (
        <>
          <Heading>Orders: </Heading>
          {slicedArray.map((order, index) => (
            <OrderWrapper key={index}>
              <Order specificOrder={order} index={index} />
            </OrderWrapper>
          ))}
          {orders.length > 0 && (
            <Footer>
              <FooterContent>
                <FooterRows>
                  <Paragraph>Orders displayed:</Paragraph>
                  <Paragraph>
                    <select
                      onChange={(e) => {
                        setVisibleProducts(parseInt(e.target.value));
                      }}
                    >
                      <option value={4}>4</option>
                      <option value={8}>8</option>
                      <option value={12}>12</option>
                    </select>
                  </Paragraph>
                  <Paragraph>
                    <Span>{startRange}</Span>
                    <Span>-</Span>
                    <Span>{endRange}</Span>
                    <Span>of</Span>
                    <Span> {arrayLength} </Span>
                  </Paragraph>
                  <Paragraph>
                    <Span>
                      <KeyboardArrowLeftIcon onClick={() => decrementRange()} />
                    </Span>
                    <Span>
                      <KeyboardArrowRightIcon
                        onClick={() => incrementRange()}
                      />
                    </Span>
                  </Paragraph>
                </FooterRows>
              </FooterContent>
            </Footer>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default OrdersCart;
