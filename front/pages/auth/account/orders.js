import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice.js";
import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #24272e;
  min-height: 100vh;
  box-shadow: 2px 2px 8px 0 rgb(255 90 90 /60%);
  overflow-y: auto;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Orders = ({ orders }) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (user.user === null || user.user.email !== "admin@admin.com") {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Navigation />
      <Wrapper>
        <UserCart orders={orders} />
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const query = await fetch(
    "https://online-gaming-shop.herokuapp.com/getOrders"
  );
  const response = await query.json();
  const orders = response.orders;

  return {
    props: {
      orders,
    },
  };
}

export default Orders;
