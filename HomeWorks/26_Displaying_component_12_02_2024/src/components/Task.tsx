import React, { FC, useContext } from "react";
import { TodoContext } from "./Todos";

interface IProps {
    number: number,
    task: {
        title: string,
        completed: boolean
    }
}

const Task: FC<IProps> = () => {
  // 3. Получение контекста
  const {number, task: { completed, title}} = useContext(TodoContext);
  return (
    <div
      style={
        completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      {number}. {title}
    </div>
  );
};

export default Task;