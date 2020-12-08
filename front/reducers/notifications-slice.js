import { createSlice } from "@reduxjs/toolkit"

export const notificationsSlice = createSlice({
  name: "notificationsSlice",
  initialState: {
    notification: {
      notificationMessage: null,
      variant: null,
    },
  },
  reducers: {
    createNotification: ({ notification }, { payload }) => {
      notification.variant = payload.variant
      notification.notificationMessage = payload.notificationMessage
    },
    clearNotification: ({ notification }) => {
      notification.variant = null
      notification.notificationMessage = null
    },
  },
})

export const {
  createNotification,
  clearNotification,
} = notificationsSlice.actions

export const getNotification = (state) => state.notification

export default notificationsSlice.reducer
