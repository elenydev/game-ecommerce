import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
