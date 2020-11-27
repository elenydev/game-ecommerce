import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import useCookie from "../../hooks/useCookie";
import { useRouter } from "next/router";

import ProductsCart from "../ProductsCart/index.js";
import Sidebar from "../Sidebar/index.js";
const EmailsCart = React.lazy(() => import("../EmailsCart/index.js"));
const OrdersCart = React.lazy(() => import("../OrdersCart/index.js"));
const AdminProductsList = React.lazy(() =>
  import("../AdminProductsList/index.js")
);
const SubscribtionsList = React.lazy(() =>
  import("../SubscribtionsList/index.js")
);
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import ChangePasswordCart from "../ChangePasswordCart/index.js";
import {
  Wrapper,
  UserBox,
  UserAvatar,
  MenuBox,
  UserDescription,
  CardParagraph,
  CardParagraphDescription,
} from "./usercart.styles";



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
    user && "https://online-gaming-shop.herokuapp.com/images/" + user.avatar
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
          "https://online-gaming-shop.herokuapp.com/images/" + response.imageUrl
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
                <p>{user.firstName}</p>
                <span> </span>
                <p>{user.lastName}</p>
              </CardParagraph>

              <CardParagraphDescription>{user.email}</CardParagraphDescription>

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
