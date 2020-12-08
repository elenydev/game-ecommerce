import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, setUser, deleteUser } from "../reducers/user-slice.js"
import Cookies from "universal-cookie"


const useAuth = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const cookies = new Cookies()
  const [tokenCookie] = useState(cookies.get("Token"))
  const [userCookie] = useState(cookies.get("User"))
  const setCookie = (name, value) => {
    const date = new Date(new Date().getTime() + 60 * 60 * 1000)
    cookies.set(name, value, {
      expires: date,
    })
  }

  const deleteCookie = (name) => {
    cookies.remove(name)
  }

  const setCurrentUser = (user) => dispatch(setUser(user));
  const deleteCurrentUser = () => dispatch(deleteUser());

  return {
    currentUser,
    setCurrentUser,
    deleteCurrentUser,
    tokenCookie,
    userCookie,
    setCookie,
    deleteCookie,
  }
};

export default useAuth;
