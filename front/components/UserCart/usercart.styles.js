import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5%;
  min-height: 100vh;
  width: 100%;
  background: ${({ isAdmin }) =>
    isAdmin ? "rgba(0,0,0,0.3)" : "rgba(0,0,0, 0.7)"};
  background: ${({ subCart }) => subCart && "#24272e"};
  padding-top: 25%;

  @media (min-width: 280px) and (orientation: landscape) {
    padding-top: 10%;
  }
  @media (min-width: 960px) {
    width: 100%;
    padding: 0 5%;
    padding-top: 10%;
  }

  @media (min-width: 1080px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1480px) {
    padding: 0 10%;
    padding-top: 10%;
  }

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

export const UserBox = styled.div`
  display: flex;
  padding: 10px 30px 10px 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;

  flex: 0 0 auto;
  transition: all 0.4s ease 0s;
  border: 0.5px solid transparent;

  @media (min-width: 960px) {
    margin-right: 50px;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  flex: 0 0 auto;
  margin-right: 20px;
  background: ${({ background }) => `url('${background}') no-repeat center`};
  background-size: cover;
  border-radius: 50%;

  @media (min-width: 960px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1280px) {
    width: 150px;
    height: 150px;
  }

  .hidden {
    display: none;
  }

  & > .MuiIconButton-root {
    padding: 0;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: rgb(255 90 90 /80%) !important;
  }

  & > label {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    bottom: -35%;

    @media (min-width: 960px) {
      bottom: -25%;
    }
    @media (min-width: 1280px) {
      bottom: -18%;
    }
  }
`;

export const MenuBox = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 0.8em;

  @media (min-width: 960px) {
    font-size: 1em;
  }
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const CardParagraph = styled.p`
  font-family: "Roboto";
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3em;

  @media (min-width: 960px) {
    font-size: 2.5em;
  }
`;

export const CardParagraphDescription = styled.p`
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 960px) {
    font-size: 1em;
  }
`;
