import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Email from "../Email/index.js";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 40px;
  color: rgb(255 90 90 /90%);
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
`;

const EmailsCart = ({ emailsList }) => {
  const [emails, setEmails] = useState(emailsList);
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(visibleProducts);
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

  const handleArrayRange = (subscribtions) => {
    arrayLength = subscribtions.length;
    return subscribtions.slice(startRange - 1, endRange);
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

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <>
      <Wrapper>
        {emails && emails.length === 0 ? (
          <Heading>We don't have any emails</Heading>
        ) : (
          <>
            <Heading>Emails: </Heading>
            {handleArrayRange(emails).map((email, index) => (
              <Email
                emailMessage={email}
                index={index}
                key={index}
                emailId={email._id}
                setEmails={setEmails}
                setMessage={setMessage}
                setVariant={setVariant}
                setErrorAlert={setErrorAlert}
              />
            ))}
          </>
        )}
        {emails.length > 0 && (
          <Footer>
            <FooterContent>
              <FooterRows>
                <Paragraph>emails displayed:</Paragraph>
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
          </Footer>
        )}
        {message && (
          <Alert variant={variant} message={message} shouldOpen={true} />
        )}
      </Wrapper>
    </>
  );
};

export default EmailsCart;
