import React, { ChangeEvent, useState } from "react";
import Todo from "./Todo";

interface ITask {
  name: string;
  completed: boolean;
}

// rafce
const TodoList = () => {
  // Локальное состояние с текущей задачей
  const [task, setTask] = useState<ITask>({ name: "", completed: false });
  // Локальное состояние с массивом задач
  const [tasks, setTasks] = useState<ITask[]>([]);
 

  const handleIsDone = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const tasksCopy = [...tasks];
    tasksCopy[index].completed = !tasksCopy[index].completed;
    setTasks(tasksCopy);
  };

  //   CRUD - Create Read Update Delete
  const handleRemoveTask = (index: number) => {
    // TODO
    // const tasksCopy = tasks; Поверхностное копирование
    const tasksCopy = [...tasks]; // Глубокое копирование
    tasksCopy.splice(index, 1); // Удаление искомого элемента из копии
    setTasks(tasksCopy); // Определение нового значения локального состояния tasks
  };

  return (
    <div className="container">
      <h1>TODO LIST App</h1>
      <div className="input-container">
        <input
          type="text"
          id="taskInput"
          placeholder="Enter task name..."
          //   Обработка события изменения значения
          onChange={(e) => setTask({ name: e.target.value, completed: false })}
          //   Связка значения input и локального состояния
          value={task.name}
        />
        <button
          id="addBtn"
          onClick={() => {
            setTasks([...tasks, task]);
            setTask({ name: "", completed: false });
          }}
        >
          Add Task
        </button>
      </div>
      <ol id="taskList">
        {/* При итерации данных возвращаем JSX.Element */}
        {tasks.map((taskName, index) => (
          // 1. Пример передачи props
          <Todo
            key={index}
            taskNameProps={task.name}
            removeTask={() => handleRemoveTask(index)}
            done={task.completed}
            isDone={(e) => handleIsDone(e, index)}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
