import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import { FormLabel, Button, Checkbox } from "@material-ui/core";
import Link from "next/link";
import Alert from "../Alert/index";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
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

  & > a {
    cursor: pointer;
  }
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

const CheckBox = styled(FormLabel)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px 0;

  & > .MuiCheckbox-root {
    color: #b73d1cbf;
  }

  & > .MuiCheckbox-colorSecondary.Mui-checked {
    color: #b73d1cbf;
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

const RegisterForm = () => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  });

  const router = useRouter();
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert();
  const registerUser = async (data, event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, avatar, policy } = data;

    const user = new FormData();
    user.append("firstName", firstName);
    user.append("lastName", lastName);
    user.append("email", email);
    user.append("password", password);
    user.append("avatar", avatar[0]);
    user.append("policy", policy);

    try {
      const send = await fetch(
        "https://online-gaming-shop.herokuapp.com/signUp",
        {
          method: "POST",
          body: user,
        }
      );
      const response = await send.json();
      if (response) {
        if (response.user) {
          setVariant("success");
          setMessage("User created");
          setTimeout(() => router.push("/auth/login"), 1000);
          reset();
        }
        if (response.message) {
          setVariant("error");
          setMessage("User already exist");
        }
      } else {
        setErrorAlert();
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
      <Header>Create an account</Header>

      <Form onSubmit={handleSubmit(registerUser)} encType="">
        <FormLabel>
          <InputElement
            type="text"
            name="firstName"
            placeholder="First Name"
            inputRef={register({ required: true })}
            onChange={() => {
              setError("firstName", {
                type: "manual",
                message: "You have to provide a first name",
              });
            }}
          />
        </FormLabel>
        {errors.firstName && errors.firstName.type === "required" && (
          <ErrorSpan>Please provide a first name</ErrorSpan>
        )}

        <FormLabel>
          <InputElement
            type="text"
            name="lastName"
            placeholder="Last Name"
            inputRef={register({ required: true })}
            onChange={() => {
              setError("lastName", {
                type: "manual",
                message: "You have to provide a last name",
              });
            }}
          />
        </FormLabel>
        {errors.lastName && errors.lastName.type === "required" && (
          <ErrorSpan>Please provide a last name</ErrorSpan>
        )}

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
                message: "You have to a email",
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

        <input
          ref={register({ required: true })}
          name="avatar"
          type="file"
          accept=".png, .jpg, .jpeg"
          id="avatar"
          className="hidden"
          onChange={(e) => {
            setError("avatar", {
              type: "manual",
              message: "You have to provide an avatar",
            });
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
        {errors.avatar && errors.avatar.type === "required" && (
          <ErrorSpan>Please provide an avatar</ErrorSpan>
        )}

        <CheckBox>
          {" "}
          You have to accept our{" "}
          <Link href="/privacy">
            <ErrorSpan>
              <a>Privacy Policy</a>
            </ErrorSpan>
          </Link>
          <Checkbox
            name="policy"
            inputRef={register({ required: true })}
            onChange={() => {
              setError("policy", {
                type: "manual",
                message: "You have accept our privacy policy ",
              });
            }}
          />
          {errors.policy && errors.policy.type === "required" && (
            <ErrorSpan>Please accept our privacy policy</ErrorSpan>
          )}
        </CheckBox>
        <Button type="submit" variant="contained" color="secondary">
          Create
        </Button>
      </Form>

      <LoginDiv>
        <Link href="/auth/login">
          <a>Or switch to sign in</a>
        </Link>
      </LoginDiv>

      {message && (
        <Alert variant={variant} message={message} shouldOpen={true} />
      )}
    </Wrapper>
  );
};

export default RegisterForm;
