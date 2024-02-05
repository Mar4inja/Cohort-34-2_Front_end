import React, { useState } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [inputValue, setInputValue] = useState("");

  //setCount(1)  меняется значение локального состояния (count) с помощью специального метода setCount

  //   let x = 0;
  //   console.log(x--);

  const increment = () => {
    setCount(count + 1);
  };

  const handleSubmit = () => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(increment)}>Increment</button>

      <div>
        <input
          type="text"
          placeholder="Set new counter value..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => setCount(handleSubmit)}>Submit</button>
      </div>
    </div>
  );
}

export default Counter;
