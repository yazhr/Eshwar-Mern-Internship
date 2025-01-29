import React from 'react'

// export const Rough = () => {
//   return (
//     <div>Rough</div>
//   )
// }
// export default Rough

export const Rough = (props) => {
  return (
    <div>
        <h1>product name:{props.name}</h1>
        <h1>product id:{props.id}</h1>
        <h1>product Price:{props.Price}</h1>

        </div>
  )
}

export default Rough;