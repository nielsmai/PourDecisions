import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateDrink, { IngredientsList } from "./components/createDrink/createDrink";
import Home from "./components/home/home"
import Navbar from './components/navbar/navbar';
import { CreateIngredient } from './components/createDrink/createDrink';

function App() { 
  return (
    <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<CreateDrink />} />
        <Route path="/drinks/ingredients" element = {<CreateIngredient/>} />
        <Route path="/drinks/test" element = {<IngredientsList/>}/>
      </Routes>
    </Router>
    );
}

export default App;
