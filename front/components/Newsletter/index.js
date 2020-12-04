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
import { FormLabel } from "@material-ui/core";
import { CHECK_IF_EMAIL_REGEX, ENDPOINT_URL } from "../../constants.js";

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
      const query = await fetch(`${ENDPOINT_URL}/subscribtions/add`, {
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
    let mounted = true;
    if (mounted) clearMessage();
    return () => {
      mounted = false;
    };
  }, [message]);
  return (
    <>
      <NewsletterContainer>
        <Heading>Newsletter</Heading>

        <Form onSubmit={handleSubmit(addSubscriber)}>
          <InputContainer>
            <FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: CHECK_IF_EMAIL_REGEX,
                    message: "invalid email address",
                  },
                })}
              />
            </FormLabel>
          </InputContainer>
          <label>
            <Button type="submit">Subscribe</Button>
          </label>
        </Form>
      </NewsletterContainer>
      {errors.email && errors.email.type === "required" && (
        <ErrorSpan>Please provide a email</ErrorSpan>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <ErrorSpan>Please provide a correct email</ErrorSpan>
      )}
      {message !== null && (
        <Alert message={message} variant={variant} shouldOpen={true} />
      )}
    </>
  );
};

export default Newsletter;
