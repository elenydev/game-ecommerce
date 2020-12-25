import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useRouter } from "next/router"
import useNotification from "../../hooks/useNotification"

import ProductsCart from "../ProductsCart/index"
import Sidebar from "../Sidebar/index"
import EmailsCart from "../EmailsCart/index"
import OrdersCart from "../OrdersCart/index"
import AdminProductsList from "../AdminProductsList/index"
import SubscribtionsList from "../SubscribtionsList/index"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import IconButton from "@material-ui/core/IconButton"
import ChangePasswordCart from "../ChangePasswordCart/index"
import {
  Wrapper,
  UserBox,
  UserAvatar,
  MenuBox,
  UserDescription,
  CardParagraph,
  CardParagraphDescription,
} from "./usercart.styles"
import { ENDPOINT_URL } from "../../constants"
import {
  Email,
  Subscribtion,
  Product,
  Order,
} from "@/../interfaces/dataInterfaces"

type Props = {
  products?: Product[]
  orders?: Order[]
  subscribtions?: Subscribtion[]
  emails?: Email[]
}

const UserCart = (props: Props): JSX.Element => {
  const {
    currentUser: { user },
    setCurrentUser,
    tokenCookie,
  } = useAuth()
  const router = useRouter()
  const { products, orders, subscribtions, emails } = props
  const { setNotification, setErrorNotification } = useNotification()

  const [userImage, setUserImage] = useState(
    user && `${ENDPOINT_URL}/images/` + user.avatar
  )

  const changeAvatar = async (avatar: File): Promise<void> => {
    const data = new FormData()
    data.append("avatar", avatar)
    data.append("email", user.email)
    data.append("userId", user.userId)
    try {
      const send = await fetch(`${ENDPOINT_URL}/users/avatar`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: "Bearer " + tokenCookie,
        },
      })
      const {
        imageUrl,
        message,
      }: { imageUrl: string; message: string } = await send.json()
      if (!imageUrl) {
        setErrorNotification()
        return
      }
      setUserImage(`${ENDPOINT_URL}/images/` + imageUrl)
      setCurrentUser(user)
      setNotification("success", message)
    } catch (err) {
      setErrorNotification()
    }
  }

  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (user === null) {
        router.push("/")
      }
    }
    return () => {
      mounted = false
    }
  }, [])

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
                  changeAvatar(e.target.files[0])
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
                {user.email !== "admin@admin.com" && <ChangePasswordCart />}

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
  )
}

export default UserCart
