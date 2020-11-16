import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FormLabel } from "@material-ui/core";
import Alert from "../Alert/index.js";
import useAlert from "../../hooks/useAlert";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  background-color: #24272e;
  flex-direction: column;

  @media (min-width: 960px) {
    padding: 5% 0px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #24272e;
  padding: 15px 25px;
  border: 0.5px solid (255, 255, 255, 0.8);
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  width: 100%;
  height: 100%;

  @media (min-width: 960px) {
    padding: 40px;
    min-width: 40vw;
    max-width: 500px;
  }
`;

const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: #5bb2fc;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  font-size: 1em;
  margin: 5px;
  width: 100%;

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

const TextInput = styled.textarea`
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  font-size: 1em;
  text-decoration: none;
  font-family: "Roboto";
  margin: 10px 5px;
  width: 100%;
  resize: none;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: 1px solid white;
  }

  @media (min-width: 960px) {
    padding: 12px;
    min-height: 150px;
  }
`;

const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;

  & > a {
    cursor: pointer;
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
  align-self: center;

  @media (min-width: 960px) {
    padding: 12px;
  }

  &:hover,
  &:focus {
    background-color: #ff5a5a;
  }
`;

const defaultValues = {
  customerName: null,
  email: null,
  message: null,
};

const ContactForm = () => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  });
  const {message,setMessage,variant,setVariant,clearMessage, setErrorAlert} = useAlert()
 

  const handleSendEmail = async (data, event) => {
    event.preventDefault();
    try {
      const request = await fetch("http://localhost:8080/receiveEmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      if (!response.newEmail) {
        setErrorAlert()
      }
      setVariant("success");
      setMessage("Email send");
      reset();
    } catch (err) {
     setErrorAlert()
    }

  };

  useEffect(() => {
    clearMessage();
  }, [message]);


  return (
    <Wrapper id="contact">
      <Heading>Have question?</Heading>

      <Form onSubmit={handleSubmit(handleSendEmail)}>
        <FormLabel>
          <Input
            type="text"
            name="customerName"
            placeholder="Your name"
            ref={register({ required: true })}
            onChange={() => {
              setError("customerName", {
                type: "manual",
                message: "You have to provide a name",
              });
            }}
          />
        </FormLabel>
        {errors.customerName && errors.customerName.type === "required" && (
          <ErrorSpan>Please provide a name</ErrorSpan>
        )}
        <FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Your e-mail"
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
        </FormLabel>
        {errors.email && errors.email.type === "required" && (
          <ErrorSpan>Please provide a email</ErrorSpan>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorSpan>Please provide a correct email</ErrorSpan>
        )}
        <FormLabel>
          <TextInput
            placeholder="Your message..."
            name="message"
            ref={register({ required: true })}
            onChange={() => {
              setError("message", {
                type: "manual",
                message: "You have to provide a message",
              });
            }}
          ></TextInput>
        </FormLabel>
        {errors.message && errors.message.type === "required" && (
          <ErrorSpan>Please provide a message</ErrorSpan>
        )}

        <Button type="submit">Send</Button>
      </Form>
      {message && (
        <Alert shouldOpen={true} message={message} variant={variant} />
      )}
    </Wrapper>
  );
};

export default ContactForm;
