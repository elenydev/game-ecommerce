import React from "react"
import useAuth from "../../hooks/useAuth"
import useNotification from "../../hooks/useNotification"

import { IconButton } from "@material-ui/core"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import {
  SubscribtionWrapper,
  SubscribtionCard,
  DeleteWrapper,
} from "./subscribtion.styles"
import { ENDPOINT_URL } from "../../constants"

const Subscribtion = (props) => {
  const { email, index, setSubscribtions } = props
  const { setNotification, setErrorNotification } = useNotification()

  const {
    currentUser: {
      user: { userId },
    },
    tokenCookie,
  } = useAuth()

  const fetchSubscribtions = async () => {
    try {
      const query = await fetch(`${ENDPOINT_URL}/subscribtions/all`)
      const response = await query.json()
      setSubscribtions(response.subscribers.reverse())
    } catch (err) {
      console.log(err)
    }
  }

  const deleteSubscribtionFromDatabase = async (email) => {
    try {
      const request = await fetch(`${ENDPOINT_URL}/subscribtions/remove`, {
        method: "POST",
        body: JSON.stringify({
          email: email.email,
          userId,
        }),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      })
      const { subscribtion, message } = await request.json()
      if (!subscribtion) {
        setNotification("error", message)
      }
      setNotification("success", message)
      fetchSubscribtions()
    } catch (err) {
      setErrorNotification()
    }
  }
  return (
    <>
      <SubscribtionWrapper key={index}>
        <SubscribtionCard>{email.email}</SubscribtionCard>

        <DeleteWrapper>
          <IconButton onClick={() => deleteSubscribtionFromDatabase(email)}>
            <DeleteForeverIcon />
          </IconButton>
        </DeleteWrapper>
      </SubscribtionWrapper>
    </>
  )
}

export default Subscribtion
