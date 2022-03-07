import './App.css';
//import CreateDrink from "./components/createDrink/createDrink.js";
import ChangePasswordAccount from "./components/changePasswordAccount/changePasswordAccount.js"
import DrinksPage from "./components/viewDrinks/viewDrinks.js"
import ViewAccount from "./components/viewAccount/viewAccount.js"
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDrink, { IngredientsList } from "./components/createDrink/createDrink";
import Home from "./components/home/home"
import Navbar from './components/navbar/navbar';
import { CreateIngredient } from './components/createDrink/createDrink';
import LogInAccount from './components/logInAccount/logInAccount';
import LogOutAccount from './components/logOutAccount/logOutAccount';

function App() { 
  return (
    //ChangePasswordAccount()
    //DrinksPage()
    ViewAccount()
   
    // <div className="wrapper">
    //   <Router>
    //       <Navbar />
    //      <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/drinks" element={<CreateDrink />} />
    //       <Route path="/drinks/ingredients" element = {<CreateIngredient/>} />
    //       <Route path="/drinks/test" element = {<IngredientsList/>}/>
    //       <Route path="/LogInAccount" element={<LogInAccount/>} />
    //       <Route path="/LogOutAccount" element={<LogOutAccount/>} />
    //     </Routes>
    //   </Router>
    // </div>
    );
}

export default App;
