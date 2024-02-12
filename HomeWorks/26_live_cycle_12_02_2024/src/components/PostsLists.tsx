import React, { useEffect, useState, createContext } from 'react';
import Post from './Post';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostsContext = createContext<IPost | null>(null);

const PostsLists = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts && posts.map((post, index) => (
        <PostsContext.Provider key={index} value={post}>
          <Post key={index} />
        </PostsContext.Provider>
      ))}
    </div>
  );
};

export default PostsLists;
