import React, { useEffect, useState } from "react";

interface IPost {
 
  title: "string";
  body: "string";

}

const Posts = () => {
  const [postList, setPostList] = useState<IPost[] | null>(null);

  useEffect(() => {
    // () => console.log('Component is mounted');
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostList(data));


  return () => console.log("Component is unmounted");
}, []);
return (
  <div>
    {postList &&
      postList.map((post, index) => (
        <div
          key={index}
          >
          {index + 1}. {post.title}
        </div>
      ))}
  </div>
);
};

export default Posts;
