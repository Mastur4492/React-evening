import React from "react";
import ClassComponent from "./Components/ClassComponent";
import PropsInComponent from "./Components/PropsInClassComponent";
import { NamedComponent } from "./Components/NamedComponent";
import Greet from "./Components/Greet";

const App = () => {
  let age = 19;
  return (
    <div>
      <ClassComponent />
      <PropsInComponent />
      <NamedComponent />
      <Greet name = "Mastur" age = {age}/>
    </div>
  );
};

export default App;
