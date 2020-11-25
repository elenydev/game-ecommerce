import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #24272e;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  padding: 10px;

  @media (min-width: 960px) {
    padding: 30px 0;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 5px;

  @media (min-width: 960px) {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
  }

  @media (min-width: 1280px) {
    width: 80%;
  }
`;

export const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: #5bb2fc;
  font-family: "Black Ops One", normal;
  font-weight: 500;
`;

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  min-height: 15vh;
`;

export const AdressContent = styled.div`
  text-align: left;
  margin: 10px 0;

  span {
    margin: 10px 0;
    color: #ff5a5a;
  }
`;

export const FollowUsContainer = styled.div`
  display: flex;
  min-height: 15vh;
  justify-content: space-between;
  margin: 25px 0;
  flex-direction: column;

  @media (min-width: 960px) {
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
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 960px) {
    margin-top: 40px;
  }

  & > a {
    cursor: pointer;
    color: #5bb2fc;
  }
`;
