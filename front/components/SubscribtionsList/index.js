import React, { useState, useEffect } from "react";
import useAlert from "../../hooks/useAlert.js";
import useArrayRange from "../../hooks/useArrayRange";

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
import IconButton from "@material-ui/core/IconButton";
import { Wrapper, Heading, Footer } from "./subscribtions.styles";


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
                  <label>
                    <select
                      onChange={(e) => {
                        setVisibleProducts(parseInt(e.target.value));
                      }}
                    >
                      <option value={4}>4</option>
                      <option value={8}>8</option>
                      <option value={12}>12</option>
                    </select>
                  </label>
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
                <label>
                  <Span>
                    <IconButton onClick={() => decrementRange()}>
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Span>
                </label>
                <label>
                  <Span>
                    <IconButton onClick={() => incrementRange()}>
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </Span>
                </label>
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
