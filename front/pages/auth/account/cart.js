import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Reducers/userSlice.js";
import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10%;
  background-color: #24272e;
  min-height: 100vh;
  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Account = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (user.user === null) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Navigation />
      <Wrapper>
        <UserCart />
      </Wrapper>
    </>
  );
};

export default Account;
