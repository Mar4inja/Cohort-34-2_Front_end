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

  // const handlePlus10 = () => {
  //   dispatch({ type: 'counter/plus10' })                     //  первый вариант с двумя action
  // }

  // const handleMinus10 = () => {
  //   dispatch({ type: 'counter/minus10' })
  // }

  const handlePlusMinus10 = (value: number) => {
    dispatch({ type: 'counter/plusMinus10', payload: value });
  };

  return (
    <div>
      <h2>Counter: {counter} </h2>
      <button className="btn btn-info my-1 mx-2" onClick={handleMinus}>Decrement</button>
      <button className="btn btn-danger my-1 mx-2" onClick={handleReset}>Reset</button>
      <button className="btn btn-info" onClick={handlePlus} >Increment</button>

      <div className="inputBox">
        <input  placeholder="set new counter value..."
          type="text"
          onChange={e => setValue(+e.target.value)}
        />
        <button className="btn btn-success my-1 mx-2" onClick={handleChange}>Click me!</button>
      </div>

      <div className="plusMinusSeperate">
        {/* <button onClick={handlePlus10}>Increment + 10</button>                                первый вариант с двумя action
        <button onClick={handleMinus10}>Decrement - 10</button> */}
      </div>

      <div>
        {/* второй вариант с одним action */}
        <button className="btn btn-warning increment-button my-1 mx-2 " onClick={() => handlePlusMinus10(10)}>Increment + 10</button>
        <button className="btn btn-primary decrement-button " onClick={() => handlePlusMinus10(-10)}>Decrement - 10</button>
      </div>
    </div>
  );
}

export default Counter;
