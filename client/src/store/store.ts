import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Slice/userSlice"
import goodsInfoReducer from"../Slice/goodsSlice"
const store = configureStore({
  reducer: {

    goodsInfo:goodsInfoReducer,
    user:userReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export default store