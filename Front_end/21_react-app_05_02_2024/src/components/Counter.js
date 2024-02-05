import React, { useState } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  //setCount(1)  меняется значение локального состояния (count) с помощью специального метода setCount

  //   let x = 0;
  //   console.log(x--);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(increment)}>Increment</button>
    </div>
  );
}

export default Counter;
