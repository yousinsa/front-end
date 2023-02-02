import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Goods = {
   category:string;
  };



const initialState: Goods = {
    category: "여성",
  };



export const GoodsInfo = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    goodsInfo(state, action: PayloadAction<string>) {
      state.category=action.payload; 
    }
  }
});


export const { goodsInfo } = GoodsInfo.actions;
export default GoodsInfo.reducer