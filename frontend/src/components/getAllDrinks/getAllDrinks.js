import React, { useState } from 'react';
import './getAlldrinks.css'

export default function getAllDrinks() {

    return (

    <div>
        <div class="searchBar" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
           
            <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search Drinks"
                name="s" 
            />
            <a class = "button" href="http://localhost:3000">Search</a>
            </form>
        </div>

        <div class="filters" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>
            <button type="button" class="filters">Alcoholic</button>
            <button type="button" class="filters">Mocktail</button>
            <button type="button" class="filters">Custom</button>
            <button type="button" class="filters">Newest</button>
            <button type="button" class="filters">Popularity</button>
        </div>  
               
    </div>
    );

}