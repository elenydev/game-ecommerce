import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import styled from "styled-components";
import { useRouter } from "next/router";

import Navigation from "../../../components/Navigation/index.js";
import UserCart from "../../../components/UserCart/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({  theme  }) => theme.colors.mostlyBlackBlue};
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Emails = ({ emails }) => {
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
        <UserCart emails={emails} />
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const query = await fetch(
    "https://online-gaming-shop.herokuapp.com/getEmails"
  );
  const response = await query.json();
  const emails = response.emails;

  return {
    props: {
      emails,
    },
  };
}
export default Emails;
