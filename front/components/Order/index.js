import React, { useState } from "react";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Select, MenuItem, FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";


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
} from "./order.styles";



const Order = ({ specificOrder, index }) => {
  const {
    customerFirstName,
    customerLastName,
    customerEmail,
    products,
    prize,
    date,
    status,
  } = specificOrder;
  const {
    currentUser: {
      user: { userId },
    },
  } = useAuth();
  const {tokenCookie} = useCookie()

  const [orderStatus, setOrderStatus] = useState(status);

  const handleChange = async (e) => {
    const data = {
      order: specificOrder,
      status: e.target.value,
      userId
    };
    const query = await fetch(
      "https://online-gaming-shop.herokuapp.com/changeStatus",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await query.json();
    setOrderStatus(e.target.value);
  };

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
                          <img
                            src={`https://online-gaming-shop.herokuapp.com/${product.productImg}`}
                            alt={product.productName}
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
  );
};

export default Order;
