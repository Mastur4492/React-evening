import React from 'react'

const ArrayData = ({even}) => {
  return (
    <div>
<h1>Even Number :</h1>
<ul>
    {
        even.map((data,index) => (
            <li key={index}>{data}</li>
        ))
    }
</ul>
    </div>
  )
}

export default ArrayData