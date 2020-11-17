import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
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
  width: ${({ isAdmin }) => (isAdmin ? "100%" : "90%")};
  background: ${({ isAdmin }) => isAdmin ? "rgba(0,0,0,0.3)" : "#24272e"};

  padding-top: 15%;
  @media (min-width: 960px) {
    flex-direction: row;
    padding-top: 5%;
    width: 100%;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100%;
  margin-bottom: 40px;

  @media (min-width: 960px) {
    width: 30%;
    margin-right: 50px;
    margin-bottom: 0px;
  }
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 17px 7px rgb(255 90 90 /30%);
  }

  @media (min-width: 960px) {
    width: 200px;
    height: 200px;
  }
`;

const UserDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  width: 100%;
  color: rgb(255 90 90 /90%);

  @media (min-width: 960px) {
    padding: 20px;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    justify-content: center;
    width: 100%;

    @media (min-width: 960px) {
      font-size: 1.4em;
    }
  }

  p {
    justify-content: center;
    margin: 0px 5px;
    display: block;
    color: #5bb2fc;
    font-family: "Black Ops One", normal;
    font-weight: 500;

    &::first-letter {
      text-transform: capitalize;
    }

    svg {
      margin-top: 5px;
    }
  }
  span {
    color: #5bb2fc;
    margin: 0px 5px;
  }
`;

const UserCart = ({ products, orders, subscribtions, emails }) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { variant, message, clearMessage } = useAlert();

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
            <UserAvatar>
              <img
                src={`http://localhost:8080/${user.user.avatar}`}
                alt={user.user.firstName}
              />
            </UserAvatar>
            <UserDescription>
              <div>
                <p>
                  <AccountCircleIcon />
                </p>
                <p>{user.user.firstName} </p>
                <p>{user.user.lastName}</p>
              </div>
            </UserDescription>
            <UserDescription>
              <div>
                <p>
                  <EmailIcon />
                </p>
                <span>{user.user.email}</span>
              </div>
            </UserDescription>
            {user.user.email === "admin@admin.com" && <Sidebar />}
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
