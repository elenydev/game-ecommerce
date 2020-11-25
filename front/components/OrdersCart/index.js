import React, { useState, useEffect } from "react";
import Order from "../Order/index.js";
import useArrayRange from "../../hooks/useArrayRange.js";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import { Wrapper, Heading, OrderWrapper, Footer } from "./orderscart.styles";



const OrdersCart = ({ orders }) => {
  const {
    startRange,
    endRange,
    incrementRange,
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
