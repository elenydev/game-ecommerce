import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice.js";
import ProductsCart from "../ProductsCart/index.js";
import Sidebar from "../Sidebar/index.js";
import EmailsCart from "../EmailsCart/index.js";
import OrdersCart from "../OrdersCart/index.js";
import AdminProductsList from "../AdminProductsList/index.js";
import SubscribtionsList from "../SubscribtionsList/index.js";
import useAlert from "../../hooks/useAlert.js";
import Alert from "../Alert/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5%;
  min-height: 100vh;
  width: ${({ isAdmin }) => (isAdmin ? "100%" : "90%")};
  background: ${({ isAdmin }) => (isAdmin ? "rgba(0,0,0,0.3)" : "#24272e")};
  padding-top: 25%;
  
  @media   (min-width: 280px)   and (orientation: landscape)   {
    padding-top: 5%
    ;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    width: 100%;
    padding-top: 0;
    align-items: flex-start;
  }

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

const UserBox = styled.div`
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
    margin-bottom: 0px;
  }
`;

const UserAvatar = styled.div`
  width: 75px;
  height: 75px;
  flex: 0 0 auto;
  margin-right: 20px;
  overflow: hidden;
  background: ${({ background }) => `url('${background}') no-repeat center`};
  background-size: cover;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  @media (min-width: 960px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1280px) {
    width: 150px;
    height: 150px;
  }
`;

const MenuBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40px;
`;

const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardParagraph = styled.p`
  font-family: "Roboto";
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3em;

  @media (min-width: 960px) {
    font-size: 2.5em;
  }
`;

const CardParagraphDescription = styled.p`
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 960px) {
    font-size: 1em;
  }
`;

const UserCart = ({ products, orders, subscribtions, emails }) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { variant, message, clearMessage } = useAlert();
  const userImage =
    user.user &&
    "https://online-gaming-shop.herokuapp.com/" +
      user.user.avatar.replace("images\\", "images/");

  useEffect(() => {
    let isMounted = true;
    if (user.user === null) {
      router.push("/");
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <>
      {user.user && (
        <Wrapper
          isAdmin={
            user.user.email === "admin@admin.com" &&
            router.pathname === "/auth/account/cart" &&
            true
          }
        >
          <UserBox>
            <UserAvatar background={userImage} />
            <UserDescription>
              <CardParagraph>
                {user.user.firstName}
                <span> </span>
                {user.user.lastName}
              </CardParagraph>
              <CardParagraphDescription>
                {user.user.email}
              </CardParagraphDescription>
            </UserDescription>
            <MenuBox>
              {user.user.email === "admin@admin.com" && <Sidebar />}
            </MenuBox>
          </UserBox>

          {router.pathname === "/auth/account/cart" && <ProductsCart />}
          {router.pathname === "/auth/account/emails" && (
            <EmailsCart emailsList={emails} />
          )}
          {router.pathname === "/auth/account/orders" && (
            <OrdersCart orders={orders} />
          )}
          {router.pathname === "/auth/account/products" && (
            <AdminProductsList products={products} />
          )}
          {router.pathname === "/auth/account/subscribtions" && (
            <SubscribtionsList subscribtionsList={subscribtions} />
          )}
        </Wrapper>
      )}
      {message && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </>
  );
};

export default UserCart;
