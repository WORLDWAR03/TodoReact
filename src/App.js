import React from "react";
import About from "./components/About/About";
import TodoApp from "./components/TodoApp/TodoApp";
import Headers from "./components/Headers/Headers";
import { BrowserRouter as Router, Routes } from "react-router-dom";



export default ()=> {
  return (
    

  <Router>

    <Headers />
    <Routes path="/"  component={TodoApp} />
    <Routes path="/about"  component={About} />


  </Router>
   

  );
};



