import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 5px 0px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const EmailDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
    max-width: 450px;
    align-items: flex-start;
  }
`;

export const CustomerEmail = styled.h2`
  display: flex;
  margin: 10px 0;
  font-size: 1.1em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    font-size: 1.5em;
    text-align: center;
  }
`;

export const EmailCustomerName = styled.p`
  display: flex;
  font-size: 0.8em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const EmailMessage = styled.p`
  display: flex;
  align-items: flex-start;
  color: rgb(255 90 90 /90%);
  margin-top: 10px;
  word-break: break-word;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(255 90 90 /60%);

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const DeleteWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .MuiIconButton-root {
    color: rgb(255 90 90 /90%) !important;
  }
  .MuiIconButton-label > a {
    padding-top: 8px !important;
  }

  @media (min-width: 960px) {
    flex-direction: column;
  }
`;
