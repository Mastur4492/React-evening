/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CounterLogic = (CounterWrapped) => {
  const EnhancedComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return <CounterWrapped count={count} increment={increment} />;
  };

  return EnhancedComponent;
};

export default CounterLogic;
