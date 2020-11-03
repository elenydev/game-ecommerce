import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  font-family: "Roboto";
  z-index: 99;
  width: 100%;
  left: 50%;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/images/ai3.jpg") no-repeat center;
  background-size: cover;
  right: 50%;
  height: 100vh;
  transform: translateX(100%);
  box-shadow: 0px 3px 11px -9px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s 0.1s ease-in-out;
  @media (min-width: 960px) {
    transform: translateX(-50%);
    height: fit-content;
    background: #222;
  }
  &.active {
    transform: translateX(-50%) !important;
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  z-index: 99;
  height: 100%;
  flex-wrap: wrap;
  color: white;
  div,
  ul,
  li {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
    div,
    ul,
    li {
      width: fit-content;
      text-align: center;
    }
  }
`;

export const NavLogo = styled.div`
  display: block;
  background-color: transparent;
  cursor: pointer;
`;

export const NavList = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
`;

export const NavListItem = styled.li`
  font-weight: 500;
  font-size: 1.1em;
  margin: 10px 0;
  cursor: pointer;
  @media (min-width: 960px) {
    margin: 0 20px;
  }
`;

export const NavActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 960px) {
    width: 90%;
  }

  @media (min-width: 1280px) {
    width: 80%;
  }
`;

export const Hamburger = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  z-index: 100;
  border: 0;
  margin: 0;
  transition: transform 0.3s 0.1s ease-in-out;
  @media (min-width: 960px) {
    display: none;
  }
`;

export const HamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

export const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  &:before {
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
  }
  &:after {
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
  }
  &:before {
    top: -10px;
  }
  &:after {
    top: 10px;
  }
  &.hamburger--active {
    background-color: transparent;
    &:after {
      transform: translateY(-10px) rotate(-45deg);
      background-color: white;
    }
    &:before {
      transform: translateY(10px) rotate(45deg);
      background-color: white;
    }
  }
`;
