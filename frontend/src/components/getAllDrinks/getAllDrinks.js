import React, { useState } from 'react';
import './getAlldrinks.css'

export default function getAllDrinks() {

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
            <a class = "button" href="http://localhost:3000">Search</a>
            </form>
        </div>

        {/* <div class="filters" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>
            <label htmlFor="header-search">
                <span className="visually-hidden">Enter an ingredient list, the name of drink or a creator to search for a drink</span>
            </label>
        </div> */}

        <div class="filters" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <button type="button" class="filters">Alcoholic</button>
            <button type="button" class="filters">Mocktail</button>
            <button type="button" class="filters">Custom</button>
            <button type="button" class="filters">Newest</button>
            <button type="button" class="filters">Popularity</button>
        </div>  

         <div>

        <table>
            <tr>
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
             </tr>

        </table>
        </div>
               
    </div>
    );

}