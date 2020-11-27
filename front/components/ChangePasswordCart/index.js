import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

import { FormLabel, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Paragraph,
  Form,
  ErrorSpan,
  InputElement,
  Header,
} from "./changepasswordcart.styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    boxShadow: "2px 2px 8px 0 rgb(0 0 0 / 60%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));



const defaultValues = {
  password: null,
  newPassword: null,
};

const ChangePasswordCart = ({ setMessage, setVariant, setErrorAlert }) => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  });

  const {
    currentUser: {
      user: { email },
    },
  } = useAuth();
  const { tokenCookie } = useCookie();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changePassword = async (data, event) => {
    event.preventDefault();
    const queryData = {
      password: data.password,
      newPassword: data.newPassword,
      email,
    };

    try {
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/changePassword",
        {
          method: "POST",
          body: JSON.stringify(queryData),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await query.json();
      if (response.user) {
        setVariant("success");
        setMessage("Password changed");
        handleClose();
        reset();
      }
      if (response.message) {
        setVariant("error");
        setMessage(response.message);
      }
    } catch (err) {
      setErrorAlert();
    }
  };

  return (
    <>
      <Paragraph onClick={handleOpen}>Password</Paragraph>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={handleSubmit(changePassword)} className={classes.paper}>
          <Header>Change Password</Header>

          <FormLabel>
            <InputElement
              type="password"
              name="password"
              placeholder="Current Password"
              inputRef={register({ required: true })}
              onChange={() => {
                setError("password", {
                  type: "manual",
                  message: "You have to provide a current password",
                });
              }}
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
              onChange={() => {
                setError("password", {
                  type: "manual",
                  message: "You have to provide a new password",
                });
              }}
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
  );
};

export default ChangePasswordCart;
