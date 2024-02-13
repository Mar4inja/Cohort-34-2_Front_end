import React from 'react';
import './App.css';
import PhotoList from './components/PhotoList';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import Todos from './components/Todos';
import PostsLists from './components/PostsLists';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/photos' element={<PhotoList />} />
        <Route path='/posts' element={<PostsLists />} />
        <Route path='/tasks' element={<Todos />} />
      </Route> 
    </Routes>
    // <div className="App">
    //   <PhotoList />
    // </div>
  );
}

export default App;