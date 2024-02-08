import React, { FC } from 'react'

interface IPropsTodo {
    taskNameProps: string
}

// 2. Принятие и типизация props
const Todo: FC<IPropsTodo> = ({ taskNameProps }) => {
  return (
    <li>{taskNameProps}</li>
  )
}

export default Todo