import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import styled from "styled-components";
import { useRouter } from "next/router";

import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";
import { ENDPOINT_URL } from "../../../constants.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Subscribtions = ({ subscribtions }) => {
  const {
    currentUser: { user },
  } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user === null || user.email !== "admin@admin.com") {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Navigation />
      <Wrapper>
        <UserCart subscribtions={subscribtions} />
      </Wrapper>
    </>
  );
};

export async function getServerSideProps() {
  const query = await fetch(`${ENDPOINT_URL}/getSubscribtions`);
  const response = await query.json();
  const subscribtions = response.subscribers;

  return {
    props: {
      subscribtions,
    },
  };
}
export default Subscribtions;
