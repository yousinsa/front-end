import { configureStore } from '@reduxjs/toolkit'

import goodsInfoReducer from"../Slice/goodsSlice"
const store = configureStore({
  reducer: {

    goodsInfo:goodsInfoReducer,

  },
})
export type RootState = ReturnType<typeof store.getState>

export default store