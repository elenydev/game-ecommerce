import React, { useState, useEffect } from "react";
import useAlert from "../../hooks/useAlert.js";
import useArrayRange from "../../hooks/useArrayRange";

import Email from "../Email/index.js";
import { Wrapper, Heading, Footer } from "./emailscart.styles";
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Alert from "../Alert/index.js";
import IconButton from "@material-ui/core/IconButton";



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
  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = useArrayRange();

  const { slicedArray, arrayLength } = handleArrayRange(emails);

  useEffect(() => {
    clearMessage();
    checkRanges();
  }, [message]);

  return (
    <>
      <Wrapper>

        {emails && emails.length === 0 ? (
          <Heading>We don't have any emails</Heading>
        ) : (
          <>
            <Heading>Emails: </Heading>
            
            {slicedArray.map((email, index) => (
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
                <Paragraph>Emails displayed:</Paragraph>

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
          <Alert variant={variant} message={message} shouldOpen={true} />
        )}
      </Wrapper>
    </>
  );
};

export default EmailsCart;
