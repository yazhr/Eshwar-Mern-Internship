import React, { useEffect, useState } from 'react'

export const Timer = () => {

    const [seconds,setSeconds]=useState(0);

    useEffect(
        () => {
            const interval = setInterval(()=>{
                setSeconds(prevSeconds=>prevSeconds+1);
            },500);
            return () => clearInterval(interval);
        
        },[]
    )

  return (
    <div> 
        <h2>Timer :</h2>
        <p>{seconds} seconds have passed.</p>
    </div>
  )
}