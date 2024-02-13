import React, { createContext, useEffect, useState } from "react";
import Post from "./Post";


// 2. Описали типизацию того, что собираемся хранить и отображать на странице
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const PostContext = createContext({
    userId: 1,
    id: 1,
    title: "",
    body: "",
  }
);
const PostsList = () => {
  // 1. Создали локальное состояние для хранения данных (и типизировали его)
  //    и их перерисовки при изменении значения
  const [posts, setPosts] = useState<IPost[] | null>(null);
  // 3. Описали функцию, которая отработает при старте (загрузит и сохранит данные)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <PostContext.Provider key={index} value={post}>
            <Post  info={post} />
          </PostContext.Provider>
        ))}
    </div>
  );
};
export default PostsList;