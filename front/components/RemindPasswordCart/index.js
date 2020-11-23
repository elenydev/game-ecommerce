import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FormLabel, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const LoginDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  font-size: 0.6em;
  color: white;

  .MuiPaper-root {
    color: rgba(255, 255, 255, 0.8);
    min-height: 0px;
    background: transparent;
  }
  .MuiIconButton-root {
    color: rgba(255, 255, 255, 0.8);
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  .MuiAccordionSummary-content {
    flex: 0;
    display: inline-block;
    white-space: nowrap;
  }
`;

const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    width: fit-content;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

const RemindPassword = ({ setVariant, setMessage, setErrorAlert }) => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues: {
      email: null,
    },
  });

  const remindPassword = async (data, event) => {
    event.preventDefault();
    try {
      const send = await fetch(
        "https://online-gaming-shop.herokuapp.com/remindPassword",
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
          reset();
          setVariant("success");
          setMessage("Password reset successfully, check your email");
        }
        if (response.message) {
          setVariant("error");
          setMessage(response.message);
        }
      } else {
        setErrorAlert();
      }
    } catch (err) {
      setErrorAlert();
    }
  };

  return (
    <LoginDiv>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Remind Password
        </AccordionSummary>

        <AccordionDetails>
          <Form onSubmit={handleSubmit(remindPassword)}>
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
            <Button type="submit" variant="contained" color="secondary">
              Remind
            </Button>
          </Form>
        </AccordionDetails>
      </Accordion>
    </LoginDiv>
  );
};

export default RemindPassword;
