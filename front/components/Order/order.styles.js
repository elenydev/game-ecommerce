import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 0;
  }

  .MuiPaper-root {
    background: transparent;
    color: rgb(255 90 90 /90%);
  }
  .MuiAccordionSummary-root {
    padding: 5px 0px;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiIconButton-root {
    color: white;
  }
  .MuiFormLabel-root {
    color: rgb(255 90 90 /90%);
    margin-right: 5px;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const OrderDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
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

export const CustomerName = styled.p`
  display: flex;
  font-size: 0.8em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  color: rgb(255 90 90 /90%);
  margin: 10px 0;
  word-break: break-word;
  flex-direction: column;
  min-width: 100%;
`;

export const ProductContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ProductName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ProductAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > span {
    display: flex;
    word-break: normal;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  color: rgb(255 90 90 /90%);

  & > p {
    display: flex;
    min-height: 100%;
    text-align: center;
  }

  & > div > .MuiInputBase-root {
    color: #5bb2fc !important;

    color: ${({ status }) =>
      status === "In progress" && "rgb(255 90 90 /90%)!important"};
    color: ${({ status }) =>
      status === "Delivered" && "rgb(108 255 90 / 90%)!important"};
  }
`;

export const ProductImage = styled.div`
  display: block;

  max-height: 60px;
  max-width: 60px;

  img {
    height: 100%;
    width: 100%;
  }
`;
