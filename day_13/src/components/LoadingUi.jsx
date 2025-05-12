import React from 'react'

const LoadingUi = ({users}) => {
  return (
   <>
   <h1>Users List</h1>
   {
    users.map((user,index)=>(
        <li key={index}>{user}</li>
    ))
   }
   </>
  )
}

export default LoadingUi