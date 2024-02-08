import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<{ taskName: string; id: number }[]>([]);

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { taskName: task, id: Date.now() }]);
            setTask('');
        }
    };

    const handleRemoveTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container">
            <h1>TODO LIST App</h1>
            <div className="input-container">
                <input
                    type="text"
                    id="taskInput"
                    placeholder="Enter task name..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                />
                <button id="addBtn" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            <ol id="taskList">
                {tasks.map(task => (
                    <Todo
                        key={task.id}
                        taskNameProps={task.taskName}
                        onDelete={() => handleRemoveTask(task.id)}
                    />
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
