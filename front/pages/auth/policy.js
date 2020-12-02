import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { Button } from "@material-ui/core";
import Navigation from "../../components/Navigation/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
`;

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25%;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  color: ${({ theme }) => theme.colors.darkerWhite};
  padding-bottom: 5%;

  ${({ theme }) => theme.mq.md} {
    width: 50%;
    padding-top: 0%;
  }

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.darkOrange};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightOrange};
    }
  }
`;

export const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>  theme.font.weight.medium};
  font-size: ${({ theme }) =>  theme.font.size.lg};
  color: ${({ theme }) =>  theme.colors.darkerWhite};
  margin: 20px 0px;
  width: 100%;
  text-align: center;

  ${({ theme }) =>  theme.mq.md} {
    margin-bottom: 45px;
  }
`;

const ContentWrapper = styled.ol`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentParagraph = styled.li`
  margin: 7px 0px;
  text-align: center;
  width: fit-content;
  list-style-position: inside;

  ${({ theme }) => theme.mq.md} {
    margin: 15px 0px;
  }
`;

const SummarySpan = styled.span`
  font-size: 0.6em;
  margin-top: 40px;
`;

const Policy = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Navigation />
      <PolicyWrapper>
        <Header>Privacy Policy</Header>
        <ContentWrapper>
          <ContentParagraph>
            This shop is simply dummy application, we don't sell any kind of
            products
          </ContentParagraph>
          <ContentParagraph>
            Use email and password that doesn't match your any other account
            because I am not responsible in the event of database theft or data
            leakage
          </ContentParagraph>
          <ContentParagraph>
            The data is stored by: Damian Czarnota, contact me:
            godevdamian@gmail.com
          </ContentParagraph>
          <ContentParagraph>
            All of the data is used only for application performance
          </ContentParagraph>
        </ContentWrapper>
        <label>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => router.back()}
          >
            Back
          </Button>
        </label>
        <SummarySpan>
          If you decide to log in to the application or create an account, you
          declare that you are aware and that you consent to the storage of data
          by me
        </SummarySpan>
      </PolicyWrapper>
    </Wrapper>
  );
};

export default Policy;
