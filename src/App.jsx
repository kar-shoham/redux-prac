import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByX, incrementByX } from './redux/actions/action'

const App = () => {
  let { count } = useSelector(state => state.mySlice)
  let dispatch = useDispatch()
  let increment = () => {
    dispatch(incrementByX(lol))
    updateLol(1)
  }
  let decrement = () => {
    dispatch(decrementByX(lol))
    updateLol(1)
  }
  let [lol, updateLol] = useState(1)
  return (
    <>
      <h1>{count}</h1>
      <input type="number" name="" id="" value={lol} onChange={(e) => updateLol(e.target.value)}/>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>

    </>
  )
}

export default App