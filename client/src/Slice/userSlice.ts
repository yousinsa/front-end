import { createSlice} from "@reduxjs/toolkit";

export type User = {
    sub:string;
    name:string;
    id:number;
    exp:number;
    auth:string;
  };



const initialState: User = {
     sub: "", name:"",id:0,exp:0,auth:""
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