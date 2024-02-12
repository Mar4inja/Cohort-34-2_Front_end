import React, { FC, useContext } from 'react';
import { PostsContext } from './PostsLists';

const Post: FC = () => {
  const post = useContext(PostsContext);

  if (!post) return null; 

  return (
    <div className='border border-dark border-1 my-2 rounded p-3'>
       <h2 className='text-center'>{post.title}</h2> 
       <p style={{textAlign: 'justify', textIndent: '30px'}}>{post.body}</p>
    </div>
  );
};

export default Post;
