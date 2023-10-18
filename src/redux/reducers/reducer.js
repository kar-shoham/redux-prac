import { createSlice } from "@reduxjs/toolkit";

let mySlice = createSlice({
  name: "mySlice",
  initialState: {count: 0},
  reducers: {
    increment(state){
      state.count = state.count+1
    },
    decrement(state){
      state.count = state.count-1
    }
  }
})

export default mySlice

export let {increment, decrement} = mySlice.actions