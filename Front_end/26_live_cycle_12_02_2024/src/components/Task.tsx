import React, { FC, useContext } from "react";
import { TodoContext } from "./Todos";

interface IProps {
    number: number,
    task: {
        title: string,
        completed: boolean
    }
}

const Task: FC<IProps> = ({ number, task }) => {
  // 3. Получение контекста
  const objContext = useContext(TodoContext);
  return (
    <div
      style={
        objContext.task.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      {objContext.number}. {objContext.task.title}
    </div>
  );
};

export default Task;