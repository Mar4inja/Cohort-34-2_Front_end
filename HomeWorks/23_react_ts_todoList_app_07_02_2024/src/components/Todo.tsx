import React, { FC } from 'react';

interface IPropsTodo {
    taskNameProps: string;
    onDelete: () => void;
}

const Todo: FC<IPropsTodo> = ({ taskNameProps, onDelete }) => {
    return (
        <li>
            {taskNameProps}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Todo;
