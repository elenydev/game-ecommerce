import React, { useState } from "react";
import styled from "styled-components";
import { FormLabel } from "@material-ui/core";
import { Select, MenuItem, FormControlLabel } from "@material-ui/core";


import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 0;
  }

  .MuiPaper-root {
    background: transparent;
    color: rgb(255 90 90 /90%);
  }
  .MuiAccordionSummary-root {
    padding: 5px 0px;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiIconButton-root {
    color: white;
  }
  .MuiFormLabel-root {
    color: rgb(255 90 90 /90%);
    margin-right: 5px;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const OrderDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
  }
`;

const CustomerEmail = styled.h2`
  display: flex;
  margin: 10px 0;
  font-size: 1.1em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    font-size: 1.5em;
    text-align: center;
  }
`;

const CustomerName = styled.p`
  display: flex;
  font-size: 0.8em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const ProductsList = styled.div`
  display: flex;
  color: rgb(255 90 90 /90%);
  margin: 10px 0;
  word-break: break-word;
  flex-direction: column;
  min-width: 100%;
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;

  span {
    display: flex;
    color: rgb(255 90 90 /80%);
  }
`;

const ProductContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const ProductName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const ProductAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > span {
    display: flex;
    word-break: normal;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  color: rgb(255 90 90 /90%);

  & > p {
    display: flex;
    min-height: 100%;
    text-align: center;
   
  }

  & > div > .MuiInputBase-root {
    color: #5bb2fc !important;

    color: ${({ status }) =>
      status === "In progress" && "rgb(255 90 90 /90%)!important"};
    color: ${({ status }) =>
      status === "Delivered" && "rgb(108 255 90 / 90%)!important"};
  }
`;

const ProductImage = styled.div`
  display: block;

  max-height: 60px;
  max-width: 60px;

  img {
    height: 100%;
    width: 100%;
  }
`;

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
