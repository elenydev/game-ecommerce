import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAlert from "../../hooks/useAlert";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FormLabel, Button } from "@material-ui/core";
import Alert from "../Alert/index";
import RemindPassword from "../RemindPasswordCart";
import {
  Wrapper,
  Header,
  Form,
  ErrorSpan,
  LoginDiv,
  InputElement,
} from "./auth.styles";
import { CHECK_IF_EMAIL_REGEX, ENDPOINT_URL } from "../../constants";

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

  const { setCookie } = useCookie();

  const router = useRouter();
  const { setCurrentUser } = useAuth();

  const loginUser = async (data, event) => {
    event.preventDefault();
    try {
      const send = await fetch(`${ENDPOINT_URL}/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await send.json();
      if (response) {
        if (response.user) {
          setTimeout(() => {
            setCurrentUser(response.user);
            setCookie("User", response.user);
            setCookie("Token", response.token);
            reset();
            setVariant("success");
            setMessage("You are logged in");
            router.push("/auth/account/cart");
          }, 100);
        } else {
          setErrorAlert();
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
   let mounted = true;
   if (mounted) clearMessage();
   return () => {
     mounted = false;
   };
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
                value: CHECK_IF_EMAIL_REGEX,
                message: "invalid email address",
              },
            })}
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
          />
        </FormLabel>

        {errors.password && errors.password.type === "required" && (
          <ErrorSpan>Please provide a password</ErrorSpan>
        )}
        <label>
          <Button type="submit" variant="contained" color="secondary">
            Sign in
          </Button>
        </label>

        <LoginDiv>
          <Link href="/auth/register">
            <a>Back to sign up</a>
          </Link>
        </LoginDiv>
      </Form>
      <RemindPassword
        setMessage={setMessage}
        setVariant={setVariant}
        setErrorAlert={setErrorAlert}
      />

      {message && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </Wrapper>
  );
};

export default Login;
