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
`;

export const ProductContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  border: 1px solid rgb(255 90 90 /60%);
  border-radius: 50px;
  margin-bottom: 5px;
  transition: all 0.4s ease 0s;

  &:hover {
    transform: scale(1.02);
    border: 1.5px solid #ff5a5a;
  }

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  align-self: center;

  @media (min-width: 960px) {
    height: 150px;
    min-width: 150px;
  }

  img {
    width: 100%;
    box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
    height: auto;
    border-radius: 50%;
  }
`;

export const ProductDescriptionBox = styled.div`
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

export const ProductName = styled.h2`
  display: flex;
  margin: 10px 0;
  justify-content: center;
  text-align: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
  }
`;

export const ProductDescription = styled.p`
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  word-break: break-word;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const ProductPrizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  justify-content: space-between;
  color: rgb(255 90 90 /90%);

  @media (min-width: 960px) {
    flex-direction: row;
    margin-left: auto;
  }
`;

export const ProductPrize = styled.p`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.4em;
  @media (min-width: 960px) {
    margin: 0;
  }
`;

export const ProductAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    display: block;
  }

  @media (min-width: 960px) {
    margin: 0 20px;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;

  span {
    display: flex;
    color: rgb(255 90 90 /80%);
  }
`;