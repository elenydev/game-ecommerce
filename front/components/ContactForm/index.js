import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FormLabel } from "@material-ui/core";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  background-color: #24272e;

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

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const handleSendEmail = (data, event) => {
    event.preventDefault();
  };

  return (
    <Wrapper id='contact'>
      <Form onSubmit={handleSendEmail}>
        <Heading>Have question?</Heading>
        <FormLabel>
          <Input type='text' name='name' placeholder='Your name' />
        </FormLabel>
        <FormLabel>
          <Input type='email' name='email' placeholder='Your e-mail' />
        </FormLabel>
        <FormLabel>
          <TextInput placeholder='Your message...' name='message'></TextInput>
        </FormLabel>
        <Button type='submit'>Send</Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
