import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { FormLabel, Button, Checkbox } from "@material-ui/core";
import Link from "next/link";
import Alert from "../Alert/index";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useDispatch } from "react-redux";
import { setUser } from "../../Reducers/userSlice.js";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-width: 35vw;
  max-width: 500px;
  padding: 10px;
  color: white;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  background-color: rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  & > .MuiFormLabel-root {
    color: white;
  }

  & > .hidden {
    display: none;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: #ff3600bf !important;
  }
`;

const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
`;

const Header = styled.h2`
  display: flex;
  font-weight: 700;
`;

const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

const defaultValues = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
  policy: null,
};

const Login = () => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  });

  const router = useRouter();
  const [responseType, setResponseType] = useState(null);
  const clearAlert = () => setTimeout(() => setResponseType(null), 999);
  const dispatch = useDispatch();

  const loginUser = async (data, event) => {
    event.preventDefault();
    try {
      const send = await fetch("http://localhost:8080/signIn", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await send.json();
      if (response) {
        setResponseType(response);
        if (response.user) {
          setTimeout(() => {
            dispatch(setUser(response.user));
            reset();
            router.push("/auth/account/cart");
          }, 600);
        }
      }
    } catch (err) {
      setResponseType({ message: "Some error occured, try again" });
    }
    clearAlert();
  };

  return (
    <Wrapper>
      <Header>Sign in</Header>

      <Form onSubmit={handleSubmit(loginUser)}>
        <FormLabel>
          <InputElement
            type='text'
            name='email'
            placeholder='Enter email'
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            onChange={() => {
              setError("email", {
                type: "manual",
                message: "You have to provide a email",
              });
            }}
          />
        </FormLabel>
        {errors.email && errors.email.type === "required" && (
          <ErrorSpan>Please provide a email</ErrorSpan>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorSpan>Please provide a correct email</ErrorSpan>
        )}
        <FormLabel>
          <InputElement
            type='password'
            name='password'
            placeholder='Enter Password'
            inputRef={register({ required: true })}
            onChange={() => {
              setError("password", {
                type: "manual",
                message: "You have to provide a password",
              });
            }}
          />
        </FormLabel>
        {errors.password && errors.password.type === "required" && (
          <ErrorSpan>Please provide a password</ErrorSpan>
        )}

        <Button type='submit' variant='contained' color='secondary'>
          Sign in
        </Button>
      </Form>

      {(responseType && responseType.user && (
        <Alert
          message='You are succesfully logged in'
          shouldOpen={true}
          variant='success'
        />
      )) ||
        (responseType && responseType.message && (
          <Alert
            message={responseType.message}
            shouldOpen={true}
            variant='error'
          />
        ))}
    </Wrapper>
  );
};

export default Login;
