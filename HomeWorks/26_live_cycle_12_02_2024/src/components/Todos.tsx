import React, { createContext, useEffect, useState } from "react";
import Task from "./Task";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 1. Создание контекста
export const TodoContext = createContext({
  number: 0,
  task: {
    userId: 1,
    id: 1,
    title: "",
    completed: false,
  },
});

const Todos = () => {
  const [todoList, setTodoList] = useState<ITodo[] | null>(null);

  useEffect(() => {
    // () => console.log('Компонент смонтирован');
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
    return () => console.log("Компонент размонтирован");
  }, []);

  return (
    <div>
      {todoList &&
        todoList.map((todo, index) => (
          // 2. Передача контекста
          <TodoContext.Provider
            value={{
              number: index + 1,
              task: todo
            }}
          >
            <Task key={index} number={index + 1} task={todo} />
          </TodoContext.Provider>
        ))}
    </div>
  );
};

export default Todos;