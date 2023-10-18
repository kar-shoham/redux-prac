import { decrement, increment } from "../reducers/reducer"

export let incrementByX = (x) => async(dispatch) => {
  for(let i=0; i<x; i++){
    dispatch(increment())
  }
}

export let decrementByX = (x) => async(dispatch) => {
  for(let i=0; i<x; i++){
    dispatch(decrement())
  }
}
