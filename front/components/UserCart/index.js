import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import ProductsCart from "../ProductsCart/index.js";
import Sidebar from "../Sidebar/index.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5%;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 8px 0 rgb(255 90 90 /60%);
  padding-top: 15%;
  @media (min-width: 960px) {
    flex-direction: row;
    padding-top: 5%;
    width: 98%;
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
    box-shadow: 0px 0px 17px 7px rgb(255 90 90 /60%);
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
  font-family: "Roboto";
  width: 100%;
  color: #5bb2fc;
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
    display: flex;
    justify-content: center;
    margin: 5px;
  }
`;




const UserCart = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;
    if (user.user === null) {
      router.push("/");
    }

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {user.user && (
        <Wrapper>
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
                <p> {user.user.firstName} </p>
                <p>{user.user.lastName}</p>
              </div>
            </UserDescription>
            <UserDescription>
              <div>
                <p>
                  <EmailIcon />
                </p>
                <p>{user.user.email}</p>
              </div>
            </UserDescription>
            {user.user.email === "admin@admin.com" && <Sidebar />}
          </UserBox>
          <ProductsCart />
        </Wrapper>
      )}
    </>
  );
};

export default UserCart;
