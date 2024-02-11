import React from 'react';
import './App.css';
import Todos from './components/Todos';
import PostsLists from './components/PostsLists';
import PhotoList from './components/PhotoList';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/photos' element={<PhotoList />} />
        <Route path='/posts' element={<PostsLists />} />
        <Route path='/todoList' element={<Todos />} />


      </Route>
    </Routes>
    // <div className="App">
    //   <h2>Todos</h2>
    //  <Todos/>
    //  <div className='space'></div>
    //  <h2>Posts List</h2>
    //  <PostsLists/>
    //  <div className='space'></div>
    //  <h2>Photos List</h2>
    //  <PhotoList/>
    // </div>
    // 

  );
}

export default App;
