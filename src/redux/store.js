import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./reducers/reducer";

let store = configureStore({
  reducer: {
    mySlice: mySlice.reducer
  }
})

export default store