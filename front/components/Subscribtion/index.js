import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useAlert from "../../hooks/useAlert";

const SubscribtionWrapper = styled.div`
  display: flex;
  min-width: 100%;
`;

const SubscribtionCard = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  color: rgb(255 90 90 /90%);
  font-size: 1.2em;
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

const Subscribtion = (props) => {
  const {
    email,
    index,
    setSubscribtions,
    setVariant,
    setMessage,
    setErrorAlert,
  } = props;
  const fetchSubscribtions = async () => {
    try {
      const query = await fetch("http://localhost:8080/getSubscribtions");
      const response = await query.json();
      setSubscribtions(response.subscribers.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubscribtionFromDatabase = async (email) => {
    try {
      const request = await fetch("http://localhost:8080/removeSubscribtion", {
        method: "POST",
        body: JSON.stringify({ email: email.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      if (!response.subscribtion) {
        setErrorAlert();
        return;
      }
      setVariant("success");
      setMessage("Subscribtion deleted");
      fetchSubscribtions();
    } catch (err) {
      setErrorAlert();
    }
  };
  return (
    <>
      <SubscribtionWrapper key={index}>
        <SubscribtionCard>{email.email}</SubscribtionCard>
        <DeleteWrapper>
          <IconButton onClick={() => deleteSubscribtionFromDatabase(email)}>
            <DeleteForeverIcon />
          </IconButton>
        </DeleteWrapper>
      </SubscribtionWrapper>
    </>
  );
};

export default Subscribtion;
