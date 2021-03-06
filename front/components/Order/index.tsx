import React, { useState } from "react"
import useAuth from "../../hooks/useAuth"
import Image from "next/image"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Select, MenuItem, FormControlLabel } from "@material-ui/core"
import { FormLabel } from "@material-ui/core"

import {
  Wrapper,
  OrderContainer,
  OrderDescriptionBox,
  OrderInfo,
  CustomerEmail,
  CustomerName,
  ProductsList,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductAmount,
  ProductInfo,
} from "./order.styles"
import { ENDPOINT_URL } from "../../constants"
import {
  Order as OrderInterface,
  ChangeStatusData,
} from "@/../interfaces/dataInterfaces"

type Props = {
  specificOrder: OrderInterface
}
const Order = ({ specificOrder }: Props) => {
  const {
    customerFirstName,
    customerLastName,
    customerEmail,
    products,
    prize,
    date,
    status,
  } = specificOrder
  const {
    currentUser: {
      user: { userId },
    },
    tokenCookie,
  } = useAuth()

  const [orderStatus, setOrderStatus] = useState(status)

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const data: ChangeStatusData = {
      order: specificOrder,
      status: e.target.value,
      userId,
    }
    await fetch(`${ENDPOINT_URL}/order/status`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + tokenCookie,
        "Content-Type": "application/json",
      },
    })
    setOrderStatus(e.target.value)
  }

  return (
    <Wrapper>
      <OrderContainer>
        <OrderDescriptionBox>
          <CustomerEmail>{customerEmail}</CustomerEmail>

          <CustomerName>
            {customerFirstName} {customerLastName} {date}
          </CustomerName>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Products
            </AccordionSummary>

            <AccordionDetails>
              <ProductsList>
                {products
                  ? products.map((product, index) => (
                      <ProductContainer key={index}>
                        <ProductImage>
                          <Image
                            src={`${ENDPOINT_URL}/images/${product.productImg}`}
                            alt={product.productName}
                            width={120}
                            height={120}
                          />
                        </ProductImage>

                        <ProductInfo>
                          <ProductName>{product.productName}</ProductName>

                          <ProductAmount>
                            <span>x{product.amount}</span>
                          </ProductAmount>
                        </ProductInfo>
                      </ProductContainer>
                    ))
                  : "There are no products"}
              </ProductsList>
            </AccordionDetails>
          </Accordion>

          <OrderInfo status={orderStatus}>
            <div>
              <FormLabel>Order Status: </FormLabel>

              <Select value={orderStatus} onChange={handleChange}>
                <MenuItem value="Accepted">Accepted</MenuItem>
                <MenuItem value="In progress">In progress</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
              </Select>
            </div>
            <p>Total prize: {prize}$</p>
          </OrderInfo>
        </OrderDescriptionBox>
      </OrderContainer>
    </Wrapper>
  )
}

export default Order
