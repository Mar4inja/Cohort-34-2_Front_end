import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Posts from './components/Posts';

function App() {
  return (

    <div className="App">
      <h2>Todos</h2>
     <Todos/>
     <div className='spacer'></div>
     <h2>Posts</h2>
     <Posts/>
    </div>

    
  );
}

export default App;
