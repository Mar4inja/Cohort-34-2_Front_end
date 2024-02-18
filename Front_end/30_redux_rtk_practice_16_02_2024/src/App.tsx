import React from "react";
import "./App.css";
import Sandwich from "./components/Sandwich";
import Counter from "./components/Counter";
import Library from "./components/Library";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <>
      <Sandwich />
      <Counter />
      <div className="space">
        <CreateBook />
        <Library />
      </div>
    </>
  );
}

export default App;


