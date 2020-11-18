import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Subscribtion from "../Subscribtion/index.js";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert.js";
import useArrayRange from "../../hooks/useArrayRange";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 960px) {
    max-width: 900px;
  }
`;

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  color: rgb(255 90 90 /90%);

  @media (min-width: 960px) {
    padding: 40px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  padding: 10px;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1em;
  }

  & > div > div > p > select {
    background-color: #24272e;
    color: white;
    font-size: 1em;
  }

  .MuiIconButton-root {
    color: white;
  }
`;

const SubscribtionsList = ({ subscribtionsList }) => {
  const [subscribtions, setSubscribtions] = useState(subscribtionsList);
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();

  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = useArrayRange();

  const { slicedArray, arrayLength } = handleArrayRange(subscribtions);

  useEffect(() => {
    clearMessage();
    checkRanges();
  }, [message]);

  return (
    <>
      <Wrapper>
        {subscribtions && subscribtions.length === 0 ? (
          <Heading>We don't have any subscribtions</Heading>
        ) : (
          <>
            <Heading>Subscribtions: </Heading>
            {slicedArray.map((email, index) => (
              <Subscribtion
                email={email}
                key={index}
                index={index}
                setSubscribtions={setSubscribtions}
                setVariant={setVariant}
                setMessage={setMessage}
                setErrorAlert={setErrorAlert}
              ></Subscribtion>
            ))}
          </>
        )}
        {subscribtions.length > 0 && (
          <Footer>
            <FooterContent>
              <FooterRows>
                <Paragraph>Subscribtions displayed:</Paragraph>
                <Paragraph>
                  <select
                    onChange={(e) => {
                      setVisibleProducts(parseInt(e.target.value));
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
              </FooterRows>
              <Paragraph>
                <Span>
                  <IconButton onClick={() => decrementRange()}>
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                </Span>
                <Span>
                  <IconButton onClick={() => incrementRange()}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Span>
              </Paragraph>
            </FooterContent>
          </Footer>
        )}
        {message && (
          <Alert shouldOpen={true} variant={variant} message={message} />
        )}
      </Wrapper>
    </>
  );
};

export default SubscribtionsList;
