import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OfferProduct from "../OfferProduct";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;

  @media (min-width: 960px) {
    padding: 40px;
  }
`;

const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: 500;
  font-size: 2.5em;
  color: rgba(0, 0, 0, 0.8);
  margin: 20px 0px;
  width: 100%;
  text-align: center;

  @media (min-width: 960px) {
    margin-bottom: 45px;
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px;
  }
`;

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const query = await fetch("http://localhost:8080/getProducts");
    const response = await query.json();
    setProducts(response.products);
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <Wrapper>
      <Header>Our offer</Header>
      <ItemsContainer>
        {products.map((product, index) => (
          <OfferProduct key={index} product={product} />
        ))}
      </ItemsContainer>
    </Wrapper>
  );
};

export default ProductsComponent;
