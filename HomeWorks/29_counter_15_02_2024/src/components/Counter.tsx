import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/storeRTK";
import { decrementByTen, incrementByTen, setCounter } from "../redux/counterSlice/counterSlice";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.counterValue);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setCounter(0));
  };

  const handleClick = () => {
    dispatch(setCounter(parseFloat(value)));
    setValue('');
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(setCounter(counter - 1))}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => dispatch(setCounter(counter + 1))}>Increment</button>
      <div>
        <input
          placeholder="set new counter value..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Click me!</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByTen())}>Increment by 10</button>
        <button onClick={() => dispatch(decrementByTen())}>Decrement by 10</button>
      </div>
    </div>
  );
}

export default Counter;
