import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice.js";
import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";
import useAlert from "../../../hooks/useAlert.js";
import Alert from "../../../components/Alert/index.js";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ isAdmin }) =>
    isAdmin ? 'url("/images/register.jpg") no-repeat center' : "#24272e"};
  background-size: cover;
  min-height: 100vh;
  box-shadow: 2px 2px 8px 0 rgb(255 90 90 /60%);

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Account = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const {
    variant,
    message,
    setMessage,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();

  useEffect(() => {
    if (user.user === null) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <>
      <Navigation />
      <Wrapper
        isAdmin={user.user && user.user.email === "admin@admin.com" && true}
      >
        <UserCart
          setMessage={setMessage}
          setVariant={setVariant}
          setErrorAlert={setErrorAlert}
        />
      </Wrapper>
      <>
        {message && (
          <Alert message={message} variant={variant} shouldOpen={true} />
        )}
      </>
    </>
  );
};

export default Account;
