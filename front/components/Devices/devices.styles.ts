import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
  justify-content: center;
  min-height: 100vh;
  font-family: "Black Ops One", cursive;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;
  padding: 10px;
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.darkerWhite};
  margin-bottom: 70px;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
    width: 100%;
    margin-bottom: 150px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
  max-width: 90%;

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 40px;

    max-width: 1200px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  box-shadow: ${({ theme }) => theme.boxShadow.light};
  background-color: rgba(0, 0, 0, 0.3);

  i {
    display: inline-block;
    width: 64px;
    height: 64px;
    background-color: transparent;
    background: url(../images/icons.png) no-repeat 0px 0px;
    text-decoration: none;
  }
  .first {
    background-position: -128px 0px;
  }
  .second {
    background-position: -64px 0px;
  }
  .third {
    background-position: 0px 0px;
  }
  ${({ theme }) => theme.mq.md} {
    padding: 20px;
  }
`;

export const CardTitle = styled.h4`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  width: 100%;
  font-weight: ${({ theme }) =>  theme.font.weight.medium};
  padding: 10px 15px;
  color: ${({ theme }) =>theme.colors.darkerWhite};

  ${({ theme }) =>theme.mq.md} {
    font-size: ${({ theme }) =>theme.font.size.sm};
  }
`;

export const CardContent = styled.p`
  font-family: "Roboto";
  color: ${({ theme }) =>theme.colors.darkerWhite};
  padding: 0px 15px;

  ${({ theme }) =>theme.mq.md} {
    padding: 0px 25px;
  }
`;
