import React from 'react'
import { Child } from './child'
export const Parent = () => {
    const message = "Hello from parent"
  return (
    <div>
        <h1>This is parent component</h1>
        <Child message={message}/>
        </div>
  )
}
