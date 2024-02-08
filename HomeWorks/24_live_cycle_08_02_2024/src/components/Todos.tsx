import React, { useEffect, useState } from "react";
import Task from "./Task";

interface ITodo {
  userId: number;
  id: number;
  title: "string";
  completed: boolean;

}

const Todos = () => {
  const [todoList, setTodoList] = useState<ITodo[] | null>(null);

  useEffect(() => {
    // () => console.log('Component is mounted');
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data));


    return () => console.log("Component is unmounted");
  }, []);
  return (
    <div>
      {todoList &&
        todoList.map((todo, index) => (
          <Task key={index} number={index+1} task={todo}/>
        ))}
    </div>
  );
};

export default Todos;
