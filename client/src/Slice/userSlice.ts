import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    email:string;
    exp:number;
    iat:0;
    id:0;
    name:string;
    phoneNumber:string
  };



const initialState: User = {
 
     email: "", exp: 0, iat: 0, id: 0, name: "", phoneNumber: "" 
   
   
  };



  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserInformation: (state, action) => {
        state = action.payload;
      },
    },
  })
  


export const { setUserInformation } = userSlice.actions;
export default userSlice.reducer