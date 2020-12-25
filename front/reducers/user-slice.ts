import { createSlice } from "@reduxjs/toolkit"
import { User } from "../interfaces/dataInterfaces"

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action: { payload: User }) => {
      state.user = action.payload
    },
    deleteUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, deleteUser } = userSlice.actions

export const selectUser = (state: { user: { user: User } }) => state.user

export default userSlice.reducer
