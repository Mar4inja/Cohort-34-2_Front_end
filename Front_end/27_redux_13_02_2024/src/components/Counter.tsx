import { count } from "console";
import React, { useState } from "react";



  const Counter = () => {

  

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button >Decrement</button>
      <button >Reset</button>
      <button >Increment</button>

      {/* <div>
        <input />
        <button onClick={setNewCount}>Click me!</button>
      </div> */}
    </div>
  );
}

export default Counter;
