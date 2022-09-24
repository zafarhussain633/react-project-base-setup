import React from 'react'
import {increment,decrement} from "redux/counterSlice"
import {useDispatch} from "react-redux"

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <button style={{padding:"12px"}} onClick={()=>dispatch(increment())}>+</button>
        <button style={{padding:"12px"}} onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter