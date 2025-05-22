import React from "react";
import CounterLogic from "./components/CounterLogic";
import CounterUi from "./components/CounterUi";

const CounterLogicUi = CounterLogic(CounterUi);
const App = () => {
  return (
    <div>
      <CounterLogicUi />
    </div>
  );
};

export default App;
