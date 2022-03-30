// import React, { useState } from 'react';
import './getAlldrinks.css'

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
// import axios from "axios"
import AXIOS from "../../axios.config"
import { Link } from 'react-router-dom';


export default function GetAllDrinks() {

    // var drinks = [];

    // const handleSubmit = (event) => {
    //     //Prevent the page form reloading
    //     event.preventDefault();
        
    //     const result = async () => {
    //         let result = await AXIOS.get('/drinks/', {
                
    //         })
    //         .then(response => {
    //             setDrinks= response.data;
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    //     }
    //     result()
    // }

   

        const [drinks, setDrinks] = useState([]);

        const getData = async () => {

            const response = await AXIOS.get('/drinks/')
            
            console.log(response.data)
            
            setDrinks(response.data)
                
        }
    

    return (

    <div>
        <div class="searchBar" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
           
            <form action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search Drinks"
                name="s" 
            />
            <a class = "button">Search</a>
            </form>
        </div>

        {/* <div class="filters" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>
            <label htmlFor="header-search">
                <span className="visually-hidden">Enter an ingredient list, the name of drink or a creator to search for a drink</span>
            </label>
        </div> */}

        <div class="filters" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <button type="button" class="fil filters">Alcoholic</button>
            <button type="button" class="fil filters">Mocktail</button>
            <button type="button" class="fil filters">Custom</button>
            <button type="button" class="fil filters">Newest</button>
            <button type="button" class="fil filters">Popularity</button>
        </div>  

         <div>

        <table >
            {/* <tr>
                <th scope='col'>Ratings</th>
                <th scope='col' >Name</th>
                <th scope='col' >Ingredients</th>
                <th scope='col' >Tags</th>
            </tr>

           
            <tr>
                <td >58</td>
                <td > Easy Whiskey Sour</td>
                <td >Ingredients: Bourbon, Lemon juice, Syrup</td>
                <td >Alcoholic</td>
                <a class = "buttonOther" href="http://localhost:3000"> View Details </a>
             </tr> */}

        </table>
        </div>

        <>
        <div>
            <h3>Drinks</h3>
            <button onClick={getData}>View Drinks</button>
            {
                drinks && drinks.map((drinks, index) =>
                {
                    const drinkName = drinks.name
                    const drinkRating = drinks.rating
                    const drinkTag= drinks.tag
                
                
                return (
                    <div key={index}>
                        <h2> {drinkName}</h2>
                        <h5>{drinkRating} ratings     [{drinkTag}]</h5>

                    </div>
                );
                })}
        </div>
        </>
               
    </div>
    )

}