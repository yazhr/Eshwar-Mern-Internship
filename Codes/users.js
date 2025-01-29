import React from 'react'
import { useSelector }from 'react-redux';
function Users(){
 const Users = useSelector ((state) => state.userinfo.users);
 console.log(Users)
  return (
    <div>
        <img src="https://www.clipartmax.com/png/middle/449-4499317_person-icons-tablet-sign.png" alt="users"></img>
        <h1>Users</h1>
    </div>
  )
}
export default Users;