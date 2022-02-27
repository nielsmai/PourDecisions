import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDrink, { IngredientsList } from "./components/createDrink/createDrink";
import Home from "./components/home/home"
import Navbar from './components/navbar/navbar';
import { CreateIngredient } from './components/createDrink/createDrink';
import LogInAccount from './components/logInAccount/logInAccount';

function App() { 

  

  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks/create" element={<CreateDrink />} />
          <Route path="/drinks/ingredients" element = {<CreateIngredient/>} />
          <Route path="/drinks/test" element = {<IngredientsList/>}/>
          <Route path="/account/login" element={<LogInAccount/>} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
