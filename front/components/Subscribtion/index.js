import React, { useEffect, useState } from "react";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  SubscribtionWrapper,
  SubscribtionCard,
  DeleteWrapper,
} from "./subscribtion.styles";



const Subscribtion = (props) => {
  const {
    email,
    index,
    setSubscribtions,
    setVariant,
    setMessage,
    setErrorAlert,
  } = props;

  const { tokenCookie } = useCookie();
  const {
    currentUser: {
      user: { userId },
    },
  } = useAuth();

  const fetchSubscribtions = async () => {
    try {
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/getSubscribtions"
      );
      const response = await query.json();
      setSubscribtions(response.subscribers.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubscribtionFromDatabase = async (email) => {
    try {
      const request = await fetch(
        "https://online-gaming-shop.herokuapp.com/removeSubscribtion",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.email,
            userId,
          }),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
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
