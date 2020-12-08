import { useSelector, useDispatch } from "react-redux"
import {
  getNotification,
  createNotification,
  clearNotification,
} from "../reducers/notificationsSlice.js"

export const useNotification = () => {
  const dispatch = useDispatch()
  const {
    notification: { variant, notificationMessage },
  } = useSelector(getNotification)
  const clearNotification = () => {
    setTimeout(() => {
      dispatch(createNotification({ variant: null, notificationMessage: null }))
    }, 1000)
  }

  const setNotification = (variant, notificationMessage) => {
    dispatch(createNotification({ variant, notificationMessage }))
  }

  const setErrorNotification = () => {
    dispatch(
      setNotification({
        variant: "error",
        notificationMessage: "Something went wrong, try again",
      })
    )
  }
  return {
    variant,
    notificationMessage,
    setNotification,
    clearNotification,
    setErrorNotification,
  }
}

export default useNotification
