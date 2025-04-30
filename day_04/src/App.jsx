import React from "react";
import ProtoType from "./components/ProtoType";
// import ArrayData from "./components/ArrayData";
// import UserList from "./components/UserList";
// import  SayHello  from './components/SayHello'
// import UserData from './components/UserData';

const App = () => {
  // let x = 10;
  // let name = "Mastur";
  // let arr = [12,34,56,78]
  // let username  = "mastur" ;

  // let salary = 124242 ;
  return (
    <div>
      {/* <SayHello name ="mastur" age ="18"/> */}
      {/* <UserData name ="Mastur" age ="18"/> */}
      {/* <UserList x = {x} name = {name}/> */}
      {/* <ArrayData even = {arr}/> */}
      {/* <ProtoType username={username} salary={salary}/> */}
      <ProtoType username salary/>
    </div>
  );
};


export default App;
