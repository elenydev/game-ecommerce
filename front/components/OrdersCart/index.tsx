import React, { useState, useEffect } from "react"
import Order from "../Order/index"
import usePagination from "../../hooks/usePagination"

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles"
import { Wrapper, Heading, OrderWrapper, Footer } from "./orderscart.styles"
import { Order as OrderInterface } from "../../interfaces/dataInterfaces"

type Props = {
  orders: OrderInterface[]
}

const OrdersCart = ({ orders }: Props): JSX.Element => {
  const {
    startRange,
    endRange,
    incrementRange,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = usePagination()

  const { slicedArray, arrayLength } = handleArrayRange(orders)

  return (
    <Wrapper>
      {orders && orders.length === 0 ? (
        <Heading>We don't have any orders</Heading>
      ) : (
        <>
          <Heading>Orders: </Heading>

          {slicedArray.map((order: OrderInterface, index: number) => (
            <OrderWrapper key={index}>
              <Order specificOrder={order} />
            </OrderWrapper>
          ))}

          {orders.length > 0 && (
            <Footer>
              <FooterContent>
                <FooterRows>
                  <Paragraph>Orders displayed:</Paragraph>

                  <Paragraph>
                    <label>
                      <select
                        onChange={(e) => {
                          setVisibleProducts(parseInt(e.target.value))
                        }}
                      >
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                      </select>
                    </label>
                  </Paragraph>

                  <Paragraph>
                    <Span>{startRange}</Span>
                    <Span>-</Span>
                    <Span>{endRange}</Span>
                    <Span>of</Span>
                    <Span> {arrayLength} </Span>
                  </Paragraph>

                  <Paragraph>
                    <label>
                      <Span>
                        <KeyboardArrowLeftIcon
                          onClick={() => decrementRange()}
                        />
                      </Span>
                    </label>
                    <label>
                      <Span>
                        <KeyboardArrowRightIcon
                          onClick={() => incrementRange()}
                        />
                      </Span>
                    </label>
                  </Paragraph>
                </FooterRows>
              </FooterContent>
            </Footer>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default OrdersCart
