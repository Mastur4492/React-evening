import React, { useState } from 'react'

const FormApp = () => {
    const [username,setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
    <input type="text" value={username} placeholder='Enter Username..' onChange={(e) => setUsername(e.target.value)}/>
    <button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default FormApp