import React, { useEffect, useState } from "react";
import Task2 from "./Task2";

interface IPost {
  title: number;
  body: string;
}

const Posts = () => {
  const [postList, setPostList] = useState<IPost[] | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostList(data));
  }, []);

  return (
    <div>
      {postList &&
        postList.map((post, index) => (
          <Task2 key={index} title={index+1} task2={post.body}/>
        ))}
    </div>
  );
};

export default Posts;
