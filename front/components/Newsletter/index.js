import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert.js";

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 960px) {
    width: auto;
  }
`;

const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: #5bb2fc;
  font-family: "Black Ops One", normal;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: fit-content;

  @media (min-width: 960px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  font-size: 1em;
  margin-right: 4px;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: 1px solid white;
  }

  @media (min-width: 960px) {
    padding: 12px;
  }
`;

const Button = styled.button`
  padding: 5px 8px;
  color: white;
  background-color: transparent;
  height: 100%;
  border: 2px solid white;
  outline: none;
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s all linear;

  @media (min-width: 960px) {
    padding: 12px;
  }

  &:hover,
  &:focus {
    background-color: #ff5a5a;
  }
`;

const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
  display: block;

  & > a {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  flex-direction: column;
`;

const defaultValues = {
  email: null,
};

const Newsletter = () => {
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

  const addSubscriber = async (data, e) => {
    e.preventDefault();
    try {
      const query = await fetch("http://localhost:8080/addSubscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await query.json();
      if (response) {
        if (response.subscriber) {
          setVariant("success");
          setMessage("Subscribtion added");
          reset();
          return;
        } else if (response.message) {
          setVariant("error");
          setMessage("You are already subscriber");
          reset();
          return;
        }
      }
      setErrorAlert();
    } catch (err) {
      setErrorAlert();
    }
  };

  useEffect(() => {
    clearMessage();
  }, [message]);

  return (
    <>
      <NewsletterContainer>
        <Heading>Newsletter</Heading>
        <Form onSubmit={handleSubmit(addSubscriber)}>
          <InputContainer>
            {errors.email && errors.email.type === "required" && (
              <ErrorSpan>Please provide a email</ErrorSpan>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorSpan>Please provide a correct email</ErrorSpan>
            )}
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              ref={register({
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
          </InputContainer>

          <Button type="submit">Subscribe</Button>
        </Form>
      </NewsletterContainer>
      {message !== null && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </>
  );
};

export default Newsletter;
