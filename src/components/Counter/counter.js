import React, { useState } from "react";
import CounterLogic from "./counterLogic";

function Counter(props) {
  const { increment, count } = CounterLogic();
  //   const increment  = CounterLogic().increment;
  //   const count = CounterLogic.count;
  return (
    // <div>
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>

    // </div>
  );
}

export default Counter;
