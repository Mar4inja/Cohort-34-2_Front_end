import React, { useEffect, useState } from "react";

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
        <div
          key={index}
          style={
            todo.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {index + 1}. {todo.title}
        </div>
      ))}
  </div>
);
};

export default Todos;
