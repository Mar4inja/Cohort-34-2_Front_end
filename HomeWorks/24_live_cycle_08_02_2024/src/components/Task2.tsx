import React from "react";

interface IProps {
  title: number; 
  task2: string;
}

const Task2: React.FC<IProps> = ({ title, task2 }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{task2}</p>
    </div>
  );
};

export default Task2;
