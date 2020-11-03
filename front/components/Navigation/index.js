import React, { useState } from "react";
import {
  Wrapper,
  Container,
  Nav,
  NavLogo,
  NavList,
  NavListItem,
  NavActions,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
} from "./navigation.styles.js";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";

const Navigation = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger__inner");
    const nav = document.querySelector(".nav");
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("active");

    console.log(hamburger);
  };

  return (
    <>
      <Hamburger className='hamburger' onClick={() => handleClick()}>
        <HamburgerBox className='hamburger__box'>
          <HamburgerInner className='hamburger__inner'></HamburgerInner>
        </HamburgerBox>
      </Hamburger>
      <Wrapper className='nav'>
        <Container>
          <Nav>
            <NavLogo>
              <Link href='/'>
                <a>
                  <img src='/images/logo2.png' alt='logo' />
                </a>
              </Link>
            </NavLogo>

            <NavList>
              <NavListItem>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </NavListItem>

              <NavListItem>
                <Link href='#'>
                  <a>Games</a>
                </Link>
              </NavListItem>
              <NavListItem>
                <Link href='#'>
                  <a>Team</a>
                </Link>
              </NavListItem>
              <NavListItem>
                <Link href='#'>
                  <a>Contact</a>
                </Link>
              </NavListItem>
              {user ? (
                <NavListItem>
                  <Link href='/'>
                    <a>Log out</a>
                  </Link>
                </NavListItem>
              ) : (
                <NavListItem>
                  <Link href='/auth/register'>
                    <a>Join us</a>
                  </Link>
                </NavListItem>
              )}

              {user && (
                <NavListItem>
                  <Link href='/cart'>
                    <a>
                      <ShoppingCartIcon />({amountOfProducts})
                    </a>
                  </Link>
                </NavListItem>
              )}
            </NavList>
            <NavActions></NavActions>
          </Nav>
        </Container>
      </Wrapper>
    </>
  );
};

export default Navigation;
