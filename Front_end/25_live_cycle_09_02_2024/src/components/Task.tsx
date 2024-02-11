import React, { FC } from 'react'

interface IProps {
    number: number;
    task: {
        title: string,
        completed: boolean
    }
}

const Task: FC<IProps> = ({ number, task }) => {
    return (
        <div
            style={
                task.completed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
            }
        >
            {number}. {task.title}
        </div>
    )
}

export default Task
