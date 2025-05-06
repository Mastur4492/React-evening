import React, { useState } from 'react'

const FormMultipul = () => {
    
    const [data,setdata] = useState({username:'',email:''})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    const handleChange =(e) => {
        const {name,value} = e.target;

        setdata((prevData) => (
            {...prevData,[name]:value}
        ))
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
<input 
type="text" 
name='username'
value={data.username}
placeholder='enter username'
onChange={handleChange}
/>
<input 
type="email" 
name='email'
value={data.email}
placeholder='enter email'
onChange={handleChange}
/>
<button type='submit'>submit</button>
</form>
    </div>
  )
}

export default FormMultipul