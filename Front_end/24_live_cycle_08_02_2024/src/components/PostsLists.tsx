import React, { useEffect, useState } from 'react'
import Post from './Post';

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  
  }

const PostsLists = () => {
    const[posts, setPosts] = useState<IPost[] | null>(null)  // Lokalnoe sostojanie (Libo null, libo pustoi massiv)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
  return (
    <div>
      {posts && posts.map((post, index) => (
        <Post key={index} info={post}/>
      ))}
    </div>
  )
}

export default PostsLists
