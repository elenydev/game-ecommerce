import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import styled from "styled-components";
import { useRouter } from "next/router";

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

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Products = ({ products }) => {
  const {
    currentUser: { user },
  } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user === null || user.email !== "admin@admin.com") {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Navigation />
      <Wrapper>
        <UserCart products={products} />
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const query = await fetch(
    "https://online-gaming-shop.herokuapp.com/getProducts"
  );
  const response = await query.json();
  const products = response.products;

  return {
    props: {
      products,
    },
    revalidate: 1,
  };
}

export default Products;
