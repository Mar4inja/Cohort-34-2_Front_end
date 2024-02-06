import React, { useState, FC, MouseEvent, ChangeEvent } from "react";

const TodoList: FC = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const addTodo = (): void => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div>
            <h2>TODO List</h2>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={addTodo}>Apply</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
