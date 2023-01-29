import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Goods = {
  
   category:string;
  };



const initialState: Goods = {
    category: "여성",
  };


// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다. 
// name, initialState, reducers.
export const GoodsInfo = createSlice({
  name: 'goods',
  initialState, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    goodsInfo(state, action: PayloadAction<string>) {
      state.category=action.payload; 
    }
  }
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { goodsInfo } = GoodsInfo.actions;
export default GoodsInfo.reducer