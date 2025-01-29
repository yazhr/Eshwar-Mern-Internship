import React from 'react'
import { useState } from 'react';
export const Clock = () => {
  const [initial, setfinal] = useState(0);
  const increment=()=>{
    setfinal(initial+1)
  }
  const decrement=()=>{
    setfinal(initial-1)
}

  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}