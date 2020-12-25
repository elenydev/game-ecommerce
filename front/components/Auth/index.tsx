import React, { useEffect } from "react"
import { useRouter } from "next/router"
import useNotification from "../../hooks/useNotification"
import useAuth from "../../hooks/useAuth"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { FormLabel, Button } from "@material-ui/core"
import RemindPassword from "../RemindPasswordCart"
import {
  Wrapper,
  Header,
  Form,
  ErrorSpan,
  LoginDiv,
  InputElement,
} from "./auth.styles"
import { CHECK_IF_EMAIL_REGEX, ENDPOINT_URL } from "../../constants"
import { AddUserFormData, User } from "../../interfaces/dataInterfaces"

const defaultValues: AddUserFormData = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
  policy: null,
}

const Login = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues,
  })

  const { setErrorNotification, setNotification } = useNotification()

  const router = useRouter()
  const { setCurrentUser, setCookie } = useAuth()

  const signIn = handleSubmit(
    async (data: AddUserFormData): Promise<void> => {
      try {
        const query = await fetch(`${ENDPOINT_URL}/users/login`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const {
          user,
          token,
          message,
        }: { user: User; token: string; message: string } = await query.json()
        if (!query.ok) {
          setNotification("error", message)
          return
        }
        setCurrentUser(user)
        setCookie("User", user.toString())
        setCookie("Token", token)
        reset()
        setNotification("success", message)
        router.push("/auth/account/cart")
      } catch (err) {
        setErrorNotification()
      }
    }
  )

  return (
    <Wrapper>
      <Header>Sign in</Header>

      <Form onSubmit={signIn}>
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
      <RemindPassword />
    </Wrapper>
  )
}

export default Login
