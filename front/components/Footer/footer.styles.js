import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
  justify-content: center;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  padding: 10px;

  ${({ theme }) => theme.mq.md} {
    padding: 30px 0;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 5px;

  ${({ theme }) => theme.mq.md} {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 80%;
  }
`;

export const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: ${({ theme }) =>  theme.colors.cyanBlue};
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) =>theme.colors.darkerWhite};
  min-height: 15vh;
`;

export const AdressContent = styled.div`
  text-align: left;
  margin: 10px 0;

  span {
    margin: 10px 0;
    color: ${({ theme }) =>theme.colors.bittersweet};
  }
`;

export const FollowUsContainer = styled.div`
  display: flex;
  min-height: 15vh;
  justify-content: space-between;
  margin: 25px 0;
  flex-direction: column;

  ${({ theme }) =>theme.mq.md} {
    margin: 0;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  width: 80%;
  align-items: flex-end;
  justify-content: space-between;
  list-style: none;

  a {
    display: block;
    width: 50px;
    height: 50px;
    text-decoration: none;
    transition: 0.5s all;
    background: url("/images/img-sprite.png") no-repeat 0px 0px;
  }
  .facebook {
    background-position: 0px 0px;

    &:hover {
      background-position: 0px -50px;
    }
  }

  .twitter {
    background-position: -50px 0px;

    &:hover {
      background-position: -50px -50px;
    }
  }

  .google {
    background-position: -100px 0px;

    &:hover {
      background-position: -100px -50px;
    }
  }

  .instagram {
    background-position: -150px 0px;

    &:hover {
      background-position: -150px -50px;
    }
  }

  .youtube {
    background-position: -200px 0px;

    &:hover {
      background-position: -200px -50px;
    }
  }
`;

export const FooterDescription = styled.p`
  display: block;
  width: 100%;
  text-decoration: none;
  font-family: "Roboto";
  text-align: center;
  margin: 25px 0;
  color: ${({ theme }) =>theme.colors.darkerWhite};
  ${({ theme }) =>theme.mq.md} {
    margin-top: 40px;
  }

  & > a {
    cursor: pointer;
    color: ${({ theme }) =>theme.colors.cyanBlue};
  }
`;
