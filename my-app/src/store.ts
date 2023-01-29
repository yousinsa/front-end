import { configureStore } from '@reduxjs/toolkit'
import  usersReducer  from './Slice/testSlice'
import goodsInfoReducer from"./Slice/goodsSlice"
const store = configureStore({
  reducer: {

    goodsInfo:goodsInfoReducer,
    users:usersReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store