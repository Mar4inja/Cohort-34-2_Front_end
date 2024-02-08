import React, { useState } from "react";
import Todo from "./Todo";

// rafce
const TodoList = () => {
    // Локальное состояние с текущей задачей
  const [task, setTask] = useState<string>("");
    // Локальное состояние с массивом задач
  const [tasks, setTasks] = useState<string[]>([]);


//   CRUD - Create Read Update Delete
  const handleRemoveTask = (index: number) => {
    // TODO
    // const tasksCopy = tasks; Поверхностное копирование
    const tasksCopy = [...tasks]; // Глубокое копирование
    tasksCopy.splice(index, 1); // Удаление искомого элемента из копии
    setTasks(tasksCopy); // Определение нового значения локального состояния tasks
  }

  return (
    <div className="container">
      <h1>TODO LIST App</h1>
      <div className="input-container">
        <input
          type="text"
          id="taskInput"
          placeholder="Enter task name..."
        //   Обработка события изменения значения 
          onChange={(e) => setTask(e.target.value)}
        //   Связка значения input и локального состояния
          value={task}
        />
        <button
          id="addBtn"
          onClick={() => {
            setTasks([...tasks, task]);
            setTask("");
          }}
        >
          Add Task
        </button>
      </div>
      <ol
        id="taskList"
      >
        {/* При итерации данных возвращаем JSX.Element */}
        {tasks.map((taskName, index) => (
            // 1. Пример передачи props
          <Todo key={index} taskNameProps={taskName} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;