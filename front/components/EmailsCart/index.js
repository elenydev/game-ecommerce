import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Email from "../Email/index.js";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Alert from "../Alert/index.js";

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

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(255 90 90 /60%);
  border-right: none;
  border-left: none;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const DeleteWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .MuiIconButton-root {
    color: rgb(255 90 90 /90%) !important;
  }
`;

const EmailsCart = () => {
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);

  const fetchEmails = async () => {
    try {
      const query = await fetch("http://localhost:8080/getEmails");
      const response = await query.json();
      setEmails(response.emails.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmailFromDatabase = async (email) => {
    try {
      const request = await fetch("http://localhost:8080/removeEmail", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      if (!response.email) {
        setVariant("error");
        setMessage("Something went wrong, try again");
        return;
      }
      setVariant("success");
      setMessage("Email deleted");
      fetchEmails();
    } catch (err) {
      setVariant("error");
      setMessage("Something went wrong, try again");
    }

    clearMessage();
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage(null);
      setVariant(null);
    }, 2000);
  };

  useEffect(() => {
    let isMounted = true;

    fetchEmails();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Wrapper>
      {emails && emails.length === 0 ? (
        <Heading>We don't have any emails</Heading>
      ) : (
        <>
          <Heading>Emails: </Heading>
          {emails.map((email, index) => (
            <EmailWrapper key={index}>
              <Email emailMessage={email} index={index} />
              <DeleteWrapper>
                <IconButton onClick={() => deleteEmailFromDatabase(email)}>
                  <DeleteForeverIcon />
                </IconButton>
              </DeleteWrapper>
            </EmailWrapper>
          ))}
        </>
      )}
      {message && (
        <Alert shouldOpen={true} variant={variant} message={message} />
      )}
    </Wrapper>
  );
};

export default EmailsCart;
