import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const [value, setValue] = useState(counter); 

  const dispatch = useDispatch();

  const handleMinus10 = () => {
    dispatch({type: 'counter/minus10'});
  }

  const handleMinus = () => {
    dispatch({type: 'counter/minus'});
  }

  const handleReset = () => {
    dispatch({type: 'counter/reset'});
  }

  const handlePlus = () => {
    dispatch({type: 'counter/plus'});
  }

  const handlePlus10 = () => {
    dispatch({type: 'counter/plus10'});
  }

  const handleChange = () => {
    dispatch({type: 'counter/change', payload: isNaN(value) ? counter : value});
  }

  const handleChangeUniversal = (x: number) => {
    dispatch({type: 'counter/change', payload: counter + x});
  }

  const handlePlus10Minus10 = (isUp: boolean) => {
    dispatch({type: 'counter/plus10&minus10', payload: isUp });
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => handleChangeUniversal(-10)}>Decrement10</button>
      <button onClick={() => handleChangeUniversal(-1)}>Decrement</button>
      <button onClick={() => handleChangeUniversal(-counter)}>Reset</button>
      <button onClick={() => handleChangeUniversal(1)}>Increment</button>
      <button onClick={() => handleChangeUniversal(10)}>Increment10</button>

      <div>
        <input
          type="text" 
          onChange={e => setValue(+e.target.value)}
        />
        <button onClick={handleChange}>Click me!</button>
      </div>
    </div>
  );
}

export default Counter;