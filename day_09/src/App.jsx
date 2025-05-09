import React, { useRef } from "react";

const App = () => {
  const username = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username.current.value)
  }
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="text" ref={username} placeholder="Enter UserName"/>
      <button onClick={()=>(username.current.focus())} type="submit">submit</button>
     </form>
    </div>
  );
};

export default App;
