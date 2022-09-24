import React from 'react'
import {useSelector,shallowEqual} from "react-redux"


const ShowResult = () => {

  const {counter} = useSelector(state=>({
    counter: state.counter
  }));

  return (
    <div>{counter.count}</div>
  )
}

export default ShowResult