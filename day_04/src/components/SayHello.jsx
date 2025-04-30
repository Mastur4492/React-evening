import React from 'react'

 const SayHello = (props) => {
  return (
    <div>
        <h1>Name {props.name}</h1>
        <h1>Name {props.age}</h1>
    </div>
  )
}

export default SayHello;