import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto";
  width: 100%;
  padding: 15px;

  ${({ theme }) => theme.mq.md} {
    padding: 35px;
  }
`;

export const SubHeader = styled.h3`
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.xs};
  text-align: center;
  font-family: "Black Ops One", cursive;

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const Header = styled.h2`
  color: red;
  font-size: 1.7em;
  text-align: center;
  font-family: "Black Ops One", cursive;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.xlg};
  }
`;

export const Description = styled.p`
  margin: 25px 15px;
  display: block;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: rgba(0, 0, 0, 0.8);

  ${({ theme }) => theme.mq.md} {
    padding: 50px 15px;
    font-size: 1.1em;
    width: 70%;
    margin: auto;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  grid-template-rows: repeat(3, 1fr);
  width: 90%;

  ${({ theme }) => theme.mq.xs} {
    width: 60%;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.md} {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-top: 50px;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardImage = styled.div`
  display: flex;
  position: relative;
  img {
    max-width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  &:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 14px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.dark};
    transform: rotate(-3deg);
  }
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 14px;
    right: 10px;
    left: auto;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.dark};
    transform: rotate(3deg);
  }
`;

export const CardTitle = styled.h4`
  display: block;
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 1px;
  padding: 10px;
  font-family: "Black Ops One", cursive;

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.sm};
    padding: 20px;
  }
`;

export const CardContent = styled.p`
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.font.size.xxs};

  ${({ theme }) =>  theme.mq.md} {
    font-size: ${({ theme }) =>theme.font.size.xs};
    line-height: 1.5;
  }
`;
