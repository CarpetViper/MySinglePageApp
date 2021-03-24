import React from "react";
import Content from "./components/ui/content/content";
import Navbar from "./components/ui/navbar/navbar";
import './App.css';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
