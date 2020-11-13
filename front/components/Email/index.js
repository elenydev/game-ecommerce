import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 0;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const EmailDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
    max-width: 450px;
  }
`;

const CustomerEmail = styled.h2`
  display: flex;
  margin: 10px 0;
  font-size: 1.1em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    font-size: 1.5em;
    text-align: center;
  }
`;

const EmailCustomerName = styled.p`
  display: flex;
  font-size: 0.8em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const EmailMessage = styled.p`
  display: flex;
  align-items: center;
  color: rgb(255 90 90 /90%);
  margin: 10px 0;
  word-break: break-word;
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;

  span {
    display: flex;
    color: rgb(255 90 90 /80%);
  }
`;

const Email = ({ emailMessage, index }) => {
  const { customerName, email, message, date } = emailMessage;
  return (
    <Wrapper>
      <EmailContainer>
        <EmailDescriptionBox>
          <CustomerEmail>{email}</CustomerEmail>
          <EmailCustomerName>
            {customerName} {date}
          </EmailCustomerName>
          <EmailMessage>{message}</EmailMessage>
        </EmailDescriptionBox>
      </EmailContainer>
    </Wrapper>
  );
};

export default Email;
