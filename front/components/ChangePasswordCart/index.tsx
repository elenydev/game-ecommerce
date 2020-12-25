import React, { useState } from "react"
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import useNotification from "../../hooks/useNotification"

import { FormLabel, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import {
  Paragraph,
  Form,
  ErrorSpan,
  InputElement,
  Header,
} from "./changepasswordcart.styles"
import { ENDPOINT_URL } from "../../constants"
import { ChangePasswordFormData } from "@/../interfaces/dataInterfaces"

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    padding: theme.spacing(2, 4, 3),
    boxShadow: "2px 2px 8px 0 rgb(0 0 0 / 60%)",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}))

const defaultValues: ChangePasswordFormData = {
  password: null,
  newPassword: null,
}

const ChangePasswordCart = (): JSX.Element => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues,
  })
  const { setNotification, setErrorNotification } = useNotification()
  const {
    currentUser: {
      user: { email },
    },
    tokenCookie,
  } = useAuth()
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const changePassword = handleSubmit(
    async (data): Promise<void> => {
      const queryData = {
        password: data.password,
        newPassword: data.newPassword,
        email,
      }

      try {
        const query = await fetch(`${ENDPOINT_URL}/users/password/change`, {
          method: "POST",
          body: JSON.stringify(queryData),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        })
        const { user, message } = await query.json()
        if (!user) {
          setNotification("error", message)
          return
        }
        setNotification("success", message)
        handleClose()
        reset()
      } catch (err) {
        setErrorNotification()
      }
    }
  )

  return (
    <>
      <Paragraph onClick={handleOpen}>Password</Paragraph>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={changePassword} className={classes.paper}>
          <Header>Change Password</Header>

          <FormLabel>
            <InputElement
              type="password"
              name="password"
              placeholder="Current Password"
              inputRef={register({ required: true })}
            />
          </FormLabel>

          {errors.password && errors.password.type === "required" && (
            <ErrorSpan>Please provide a current password</ErrorSpan>
          )}

          <FormLabel>
            <InputElement
              type="password"
              name="newPassword"
              placeholder="New Password"
              inputRef={register({ required: true })}
            />
          </FormLabel>

          {errors.newPassword && errors.newPassword.type === "required" && (
            <ErrorSpan>Please provide a new password</ErrorSpan>
          )}
          <label>
            <Button type="submit" variant="contained" color="secondary">
              Change
            </Button>
          </label>
        </Form>
      </Modal>
    </>
  )
}

export default ChangePasswordCart
