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
import Alert from "../Alert/index.js";

const ProductsComponent = ({ products }) => {
  const user = useSelector(selectUser);
  const [categoryDisplayed, setCategoryDisplayed] = useState("Desktop");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(visibleProducts);
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);
  let arrayLength = 0;

  const incrementRange = () => {
    if (endRange >= arrayLength) return;
    setStartRange(startRange + visibleProducts);
    if (endRange + visibleProducts >= arrayLength) {
      setEndRange(arrayLength);
      return;
    } else {
      setEndRange(endRange + visibleProducts);
    }
  };

  const handleArrayRange = (arr) => {
    const array = arr.filter(
      (product) =>
        product.device === categoryDisplayed && product.availableAmount > 0
    );
    arrayLength = array.length;
    return array.slice(startRange - 1, endRange);
  };

  const decrementRange = () => {
    if (startRange <= 1 || startRange - visibleProducts <= 0) return;
    setStartRange(startRange - visibleProducts);
    if (endRange - visibleProducts < visibleProducts) {
      setEndRange(visibleProducts);
    } else {
      setEndRange(endRange - visibleProducts);
    }
  };

  useEffect(() => {
    let isMounted = true;
    setStartRange(1);
    setEndRange(visibleProducts);
    if (visibleProducts > arrayLength) {
      setEndRange(arrayLength);
    } else {
      setEndRange(visibleProducts);
    }

    return () => {
      isMounted = false;
    };
  }, [visibleProducts]);

  return (
    <Wrapper id="games">
      <Header>Our offer</Header>
      <ItemsContainer>
        {handleArrayRange(products).map((product, index) => (
          <OfferProduct
            key={index}
            product={product}
            user={user}
            setVariant={setVariant}
            setMessage={setMessage}
          />
        ))}
      </ItemsContainer>
      <Footer>
        <FooterContent>
          <FooterRows>
            <Paragraph>Products displayed:</Paragraph>
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
                <option value="Desktop">Desktop</option>
                <option value="Playstation">Playstation</option>
                <option value="Xbox">Xbox</option>
              </select>
            </Paragraph>
          </FooterRows>
        </FooterContent>
      </Footer>
      {message && (
        <Alert variant={variant} shouldOpen={true} message={message} />
      )}
    </Wrapper>
  );
};

export default ProductsComponent;
