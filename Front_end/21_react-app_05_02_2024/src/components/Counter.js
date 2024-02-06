import React, { useState } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  //setCount(1)  меняется значение локального состояния (count) с помощью специального метода setCount

  const increment = () => {
    setCount(count + 1);
  };

  const setNewCount = (e) => {
    const input = e.target.previousElementSibling;
    if (!isNaN(+input.value)) {
      setCount(+input.value);
    }
    input.value = "";
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={increment}>Increment</button>

      <div>
        <input placeholder="set new counter value..." />
        <button onClick={setNewCount}>Add value</button>
      </div>
    </div>
  );
}

export default Counter;
