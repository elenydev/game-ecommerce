import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useCookie from "../../hooks/useCookie.js";
import useAuth from "../../hooks/useAuth.js";
import useProducts from "../../hooks/useProducts.js";
import { useRouter } from "next/router";

import {
  Wrapper,
  Container,
  Nav,
  NavLogo,
  NavList,
  MobileNav,
  NavListItem,
  NavActions,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
} from "./navigation.styles.js";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navigation = () => {
  const [user, setUser] = useState({ user: null });
  const { currentUser, deleteCurrentUser, setCurrentUser } = useAuth();
  const {
    productsList: { products },
    clearProducts,
  } = useProducts();
  const { deleteCookie } = useCookie();
  const router = useRouter();

  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger__inner");
    const nav = document.querySelector(".nav");
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("active");
  };

  const logOut = () => {
    deleteCookie("User");
    deleteCookie("Token");
    setTimeout(() => {
      deleteCurrentUser();
      clearProducts();
      setUser({ user: null });
    }, 300);
    setTimeout(() => {
      router.push("/");
    }, 400);
  };

   useEffect(() => {
     let mounted = true;
     if (mounted) setUser(currentUser);
     return () => {
       mounted = false;
     };
   }, [currentUser]);

  return (
    <>
      <MobileNav>
        <NavLogo>
          <Link href="/">
            <a>
              <img src="/images/logo2.png" alt="logo" />
            </a>
          </Link>
        </NavLogo>
      </MobileNav>

      <Hamburger className="hamburger" onClick={() => handleClick()}>
        <HamburgerBox className="hamburger__box">
          <HamburgerInner className="hamburger__inner"></HamburgerInner>
        </HamburgerBox>
      </Hamburger>

      <Wrapper className="nav">
        <Container>
          <Nav>
            <NavLogo>
              <Link href="/">
                <a>
                  <img src="/images/logo2.png" alt="logo" />
                </a>
              </Link>
            </NavLogo>

            <NavList>
              <NavListItem onClick={() => handleClick()}>
                <Link href="/#home">
                  <a>Home</a>
                </Link>
              </NavListItem>

              <NavListItem onClick={() => handleClick()}>
                <Link href="/#games">
                  <a>Games</a>
                </Link>
              </NavListItem>

              <NavListItem onClick={() => handleClick()}>
                <Link href="/#team">
                  <a>Team</a>
                </Link>
              </NavListItem>

              <NavListItem onClick={() => handleClick()}>
                <Link href="/#contact">
                  <a>Contact</a>
                </Link>
              </NavListItem>

              {user.user !== null ? (
                <NavListItem
                  onClick={() => {
                    handleClick(), logOut();
                  }}
                >
                  <Link href="/">
                    <a>Log out</a>
                  </Link>
                </NavListItem>
              ) : (
                <NavListItem onClick={() => handleClick()}>
                  <Link href="/auth/register">
                    <a>Join us</a>
                  </Link>
                </NavListItem>
              )}

              {user.user !== null && user.user.email !== "admin@admin.com" && (
                <NavListItem onClick={() => handleClick()}>
                  <Link href="/auth/account/cart">
                    <a>
                      <ShoppingCartIcon />
                      <span>({products.length})</span>
                    </a>
                  </Link>
                </NavListItem>
              )}

              {user.user !== null && user.user.email === "admin@admin.com" && (
                <NavListItem onClick={() => handleClick()}>
                  <Link href="/auth/account/cart">
                    <a>Admin</a>
                  </Link>
                </NavListItem>
              )}
            </NavList>
          </Nav>
        </Container>
      </Wrapper>
    </>
  );
};

export default Navigation;
