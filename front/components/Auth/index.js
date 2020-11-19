import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { FormLabel, Button, Checkbox } from "@material-ui/core";
import Link from "next/link";
import Alert from "../Alert/index";
import { useDispatch } from "react-redux";
import { setUser } from "../../Reducers/userSlice.js";
import Cookies from "universal-cookie";
import useAlert from "../../hooks/useAlert";

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

const LoginDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  position: relative;

  &:before {
    bottom: 0;
    width: 100%;
    background-color: white;
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  &:hover::before {
    border-bottom: 1px solid white;
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
  
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();

  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const loginUser = async (data, event) => {
    event.preventDefault();
    try {
      const send = await fetch(
        "https://online-gaming-shop.herokuapp.com/signIn",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await send.json();

      if (response) {
        if (response.user) {
          setTimeout(() => {
            dispatch(setUser(response.user));
            const date = new Date(new Date().getTime() + 15 * 60 * 1000);
            cookies.set("User", response.user, {
              expires: date,
            });
            reset();
            setVariant("success");
            setMessage("You are logged in");
            router.push("/auth/account/cart");
          }, 600);
        }
        else{
          setErrorAlert()
        }
      } else {
        setVariant("error");
        setMessage("Wrong password or email provided");
      }
    } catch (err) {
      setErrorAlert();
    }
  };

  
  useEffect(() => {
    clearMessage();
  }, [message]);


  return (
    <Wrapper>
      <Header>Sign in</Header>

      <Form onSubmit={handleSubmit(loginUser)}>
        <FormLabel>
          <InputElement
            type="text"
            name="email"
            placeholder="Enter email"
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
            type="password"
            name="password"
            placeholder="Enter Password"
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

        <Button type="submit" variant="contained" color="secondary">
          Sign in
        </Button>
        <LoginDiv>
          <Link href="/auth/register">
            <a>Back to sign up</a>
          </Link>
        </LoginDiv>
      </Form>

      {message && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </Wrapper>
  );
};

export default Login;
