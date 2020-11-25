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
  margin: 5px 0px;

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
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    height: auto;
  }
`;

export const ProductDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.cyanBlue};

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
    text-align: left;
  }
`;

export const ProductDescription = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.xxs};
  justify-content: center;
  word-break: break-word;
  text-align: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const ProductPrizeInfo = styled.div`
  display: flex;
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
  font-size: ${({ theme }) => theme.font.size.sm};
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
