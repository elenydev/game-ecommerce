import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OfferProduct from "../OfferProduct";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import {
  Wrapper,
  Header,
  Paragraph,
  ItemsContainer,
  Footer,
  FooterContent,
  FooterRows,
  Span,
} from "./productsComponent.styles.js";

const ProductsComponent = () => {
  
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [categoryDisplayed, setCategoryDisplayed] = useState("Desktop");
  const [visibleTasks, setVisibleTasks] = useState(5);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(visibleTasks);
  let arrayLength = 0;

  const fetchProducts = async () => {
    const query = await fetch("http://localhost:8080/getProducts");
    const response = await query.json();
    setProducts(response.products);
  };

  const incrementRange = () => {
    if (endRange >= arrayLength) return;
    setStartRange(startRange + visibleTasks);
    setEndRange(endRange + visibleTasks);
  };

  const handleArrayRange = (arr) => {
    const array = arr.filter(
      (product) => product.device === categoryDisplayed && product.availableAmount > 0
    );
    arrayLength = array.length;
    return array.slice(startRange - 1, endRange);
  };

  const decrementRange = () => {
    if (startRange <= 1 || startRange - visibleTasks <= 0) return;
    setStartRange(startRange - visibleTasks);
    setEndRange(endRange - visibleTasks);
  };

  useEffect(() =>{
    fetchProducts()
  },[])

  useEffect(() => {
    setStartRange(1);
    setEndRange(visibleTasks);
  }, [visibleTasks]);

  return (
    <Wrapper id="games">
      <Header>Our offer</Header>
      <ItemsContainer>
        {handleArrayRange(products).map((product, index) => (
          <OfferProduct key={index} product={product} user={user} />
        ))}
      </ItemsContainer>
      <Footer>
        <FooterContent>
          <FooterRows>
            <Paragraph>Products displayed:</Paragraph>
            <Paragraph>
              <select
                onChange={(e) => {
                  setVisibleTasks(parseInt(e.target.value));
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
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
                <KeyboardArrowRightIcon onClick={() => incrementRange()} />
              </Span>
            </Paragraph>
          </FooterRows>
        </FooterContent>
        <FooterContent>
          <FooterRows>
            <Paragraph>Device:</Paragraph>
            <Paragraph>
              <select
                onChange={(e) => {
                  setCategoryDisplayed(e.target.value);
                }}
              >
                <option value='Desktop'>Desktop</option>
                <option value='Playstation'>Playstation</option>
                <option value='Xbox'>Xbox</option>
              </select>
            </Paragraph>
          </FooterRows>
        </FooterContent>
      </Footer>
    </Wrapper>
  );
};

export default ProductsComponent;
