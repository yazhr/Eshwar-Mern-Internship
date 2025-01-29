import { useContext } from "react";


import { themeContext } from "./App";
const User = () => {
  const contextValues=useContext(themeContext);
 console.log(contextValues.theme);
  return (
    <div style = {contextValues.style}>
    <h1>User</h1>
    </div>
  )
}

export default User