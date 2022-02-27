import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateDrink from "./components/createDrink/createDrink";
import Home from "./components/home/home"
import Navbar from './components/navbar/navbar';

function App() { 
  return (
    <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<CreateDrink />} />
      </Routes>
    </Router>
    );
}

export default App;
