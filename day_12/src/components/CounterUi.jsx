import React from 'react'

const CounterUi = ({count,increment}) => {
  return (
        <>
<button onClick={increment}>Count : {count}</button>
        </>
  )
}

export default CounterUi