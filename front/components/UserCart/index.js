import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ProductsCart from "../ProductsCart/index.js";
import Sidebar from "../Sidebar/index.js";
import EmailsCart from "../EmailsCart/index.js";
import OrdersCart from "../OrdersCart/index.js";
import AdminProductsList from "../AdminProductsList/index.js";
import SubscribtionsList from "../SubscribtionsList/index.js";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import useCookie from "../../hooks/useCookie";
import ChangePasswordCart from "../ChangePasswordCart/index.js";
import useAuth from "../../hooks/useAuth.js";

const Wrapper = styled.div`
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

const SubRoadsWrapper = styled.div``;

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
  }
`;

const UserAvatar = styled.div`
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

const MenuBox = styled.div`
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

const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
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

const UserCart = (props) => {
 const {
   currentUser: { user },
   setCurrentUser,
 } = useAuth();
  const router = useRouter();
  const {
    products,
    orders,
    subscribtions,
    emails,
    setMessage,
    setVariant,
    setErrorAlert,
  } = props;

  const { tokenCookie } = useCookie();
  const [userImage, setUserImage] = useState(
    user &&
      "https://online-gaming-shop.herokuapp.com/" +
        user.avatar.replace("images\\", "images/")
  );

  const changeAvatar = async (avatar) => {
    const data = new FormData();
    data.append("avatar", avatar);
    data.append("email", user.email);
    data.append("userId", user.userId);
    try {
      const send = await fetch(
        "https://online-gaming-shop.herokuapp.com/changeAvatar",
        {
          method: "POST",
          body: data,
          headers: {
            Authorization: "Bearer " + tokenCookie,
          },
        }
      );
      const response = await send.json();
      if (response.imageUrl) {
        setUserImage(
          "https://online-gaming-shop.herokuapp.com/" +
            response.imageUrl.replace("images\\", "images/")
        );
        setCurrentUser(user);
        setVariant("success");
        setMessage("Avatar changed");
      } else {
        setErrorAlert();
      }
    } catch (err) {
      setErrorAlert();
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (user === null) {
      router.push("/");
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {user && (
        <Wrapper
          isAdmin={user.email === "admin@admin.com" && true}
          subCart={router.pathname !== "/auth/account/cart" && true}
        >
          <UserBox>
            <UserAvatar background={userImage}>
              <input
                name="avatar"
                type="file"
                accept=".png, .jpg, .jpeg"
                id="avatar"
                className="hidden"
                onChange={(e) => {
                  changeAvatar(e.target.files[0]);
                }}
              />
              <label htmlFor="avatar">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </UserAvatar>

            <UserDescription>
              <CardParagraph>
                {user.firstName}
                <span> </span>
                {user.lastName}
              </CardParagraph>
              <CardParagraphDescription>
                {user.email}
              </CardParagraphDescription>

              <MenuBox>
                <ChangePasswordCart
                  setMessage={setMessage}
                  setVariant={setVariant}
                  setErrorAlert={setErrorAlert}
                />
                {user.email === "admin@admin.com" && <Sidebar />}
              </MenuBox>
            </UserDescription>
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
    </>
  );
};

export default UserCart;
