import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, setUser, deleteUser } from "../reducers/user-slice"
import Cookies from "universal-cookie"
import { User } from "../interfaces/dataInterfaces"

const useAuth = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectUser)
  const cookies = new Cookies()
  const [tokenCookie] = useState<string>(cookies.get("Token"))
  const [userCookie] = useState<string>(cookies.get("User"))
  const setCookie = (name: string, value: string): void => {
    const date = new Date(new Date().getTime() + 60 * 60 * 1000)
    cookies.set(name, value, {
      expires: date,
    })
  }

  const deleteCookie = (name: string) => {
    cookies.remove(name)
  }

  const setCurrentUser = (user: User) => dispatch(setUser(user))
  const deleteCurrentUser = () => dispatch(deleteUser())

  return {
    currentUser,
    setCurrentUser,
    deleteCurrentUser,
    tokenCookie,
    userCookie,
    setCookie,
    deleteCookie,
  }
}

export default useAuth
