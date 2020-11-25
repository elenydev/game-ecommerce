import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import useAlert from "../../../hooks/useAlert.js";
import styled from "styled-components";
import { useRouter } from "next/router";

import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";
import Alert from "../../../components/Alert/index.js";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ isAdmin }) =>
    isAdmin ? 'url("/images/register.jpg") no-repeat center' : "#24272e"};
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Account = () => {
  const {
    currentUser: { user },
  } = useAuth();
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
    if (user === null) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <>
      <Navigation />
      <Wrapper isAdmin={user && user.email === "admin@admin.com" && true}>
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
