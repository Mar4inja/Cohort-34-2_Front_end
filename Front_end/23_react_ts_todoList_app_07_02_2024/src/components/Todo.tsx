import React, { ChangeEvent, FC } from 'react'

interface IPropsTodo {
  taskNameProps: string
  removeTask: () => void,
  done: boolean,
  isDone: (e: ChangeEvent<HTMLInputElement>) => void
}

// 2. Принятие и типизация props
const Todo: FC<IPropsTodo> = ({ taskNameProps, removeTask, done, isDone }) => {
  return (
    <li>
      <span style={done ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
      {taskNameProps}
      </span>
    
      <input type="checkbox" name="completed" id="isDone" onChange={isDone}/>
      <button onClick={removeTask}>Remove</button></li>
  )
}

export default Todo