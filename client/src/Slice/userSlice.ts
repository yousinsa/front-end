import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    loading:string;
    user:string[]
  };



const initialState: User = {
    loading: 'idle',
    user: [],
  };



  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      usersLoading(state, action) {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      },
      usersReceived(state, action) {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.user = action.payload
        }
      },
    },
  })
  


export const { usersLoading,usersReceived } = userSlice.actions;
export default userSlice.reducer