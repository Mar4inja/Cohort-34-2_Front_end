import { count } from "console";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";



const Counter = () => {

  const counter = useSelector((state: RootState) => state.counter.value);
  const [value, setValue] = useState(counter);

  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch({ type: 'counter/minus' })

  }
  const handlePlus = () => {
    dispatch({ type: 'counter/plus' })

  }
  const handleReset = () => {
    dispatch({ type: 'counter/reset' })

  }

  const handleChange = () => {
    dispatch({ type: 'counter/change', payload: isNaN(value) ? counter : value })

  }

  const handlePlus10 = () => {
    dispatch({ type: 'counter/plus10' })
  }

  const handleMinus10 = () => {
    dispatch({ type: 'counter/minus10' })
  }

  return (
    <div>
      <h2>Counter: {counter} </h2>
      <button onClick={handleMinus}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus} >Increment</button>

      <div>
        <input placeholder="set new counter value..."
          type="text"
          onChange={e => setValue(+e.target.value)}
        />
        <button onClick={handleChange}>Click me!</button>

      </div>
      <div>
        <button onClick={handlePlus10}>Increment + 10</button>
        <button onClick={handleMinus10}>Decrement - 10</button>
      </div>
    </div>
  );
}

export default Counter;
