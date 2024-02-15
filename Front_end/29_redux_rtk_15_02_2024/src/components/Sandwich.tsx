import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/storeRTK'
import { addIngredient, clear } from '../redux/sandwitch/sandwitchSlice';

const Sandwich = () => {
  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(clear());
  };

  return (
    <div>
      <h1>Choose your sandwich</h1>
      <p>Sandwich: {ingredients} </p>
      <button onClick={() => dispatch(addIngredient('bread'))}>Add Bread</button>
      <button onClick={() => dispatch(addIngredient('cheese'))}>Add Cheese</button>
      <button onClick={() => dispatch(addIngredient('salami'))}>Add Salami</button>


      <button onClick={handleDelete}>Delete all ingredients</button>
    </div>
  )
}

export default Sandwich
