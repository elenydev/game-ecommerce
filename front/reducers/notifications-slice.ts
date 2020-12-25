import { createSlice } from "@reduxjs/toolkit"

type Notification = {
  variant: "success" | "error"
  notificationMessage: string
}

export const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState: {
    notification: {
      notificationMessage: null,
      variant: null,
    },
  },
  reducers: {
    createNotification: (
      { notification }: { notification: Notification },
      { payload }
    ) => {
      notification.variant = payload.variant
      notification.notificationMessage = payload.notificationMessage
    },
  },
})

export const { createNotification } = notificationsSlice.actions

export const getNotification = (state: {
  notification: { notification: Notification }
}) => state.notification

export default notificationsSlice.reducer
