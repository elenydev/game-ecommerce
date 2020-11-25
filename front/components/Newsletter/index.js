import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAlert from "../../hooks/useAlert.js";

import Alert from "../Alert/index.js";
import {
  NewsletterContainer,
  Heading,
  Form,
  Input,
  Button,
  ErrorSpan,
  InputContainer,
} from "./newsletter.styles";


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
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/addSubscriber",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
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
