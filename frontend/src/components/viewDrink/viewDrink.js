import React, { useEffect, useState } from 'react'
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { Link, useParams } from 'react-router-dom'

export default function ViewDrink() {
    let { drinkId } = useParams()

    const [drink, setDrink] = useState({})
    const [userType, setUserType] = useState("")
    const [load, setLoad] = useState(false)
    
    useEffect( () => {
        const timer = setTimeout(() => {
            setLoad(true)
        }, 150)
        return () => clearTimeout(timer)
    }, [])

    const getDrink = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/id/" + drinkId)
        .then(res => {
            if (res.data.author !== user) setUserType("guest")
            setDrink(res.data)
        })
    } 
    useEffect( () => {
        if (localStorage.getItem('loggedIn') === null){
            setUserType("guest")
        }
        else if (localStorage.getItem('loggedUsername') == 'admin') {
            setUserType("admin") 
        }
        else {
            setUserType("user")
        }
        getDrink()
            // <p className="body-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

    }, []) 

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ")
    }
 
    return load 
        ? (
        <div id="drink-info">
        <div id="top-bar">
            <span id="drink-name" className="top-bar-element left">{drink.name}</span>
            <span id="drink-rating" className="top-bar-element left">{drink.rating + " likes"}</span>
            <span id="drink-tag" className="top-bar-element right">{drink.tag}</span>
            <span id="drink-author" className="top-bar-element left">{"made by " + drink.author}</span>
        </div> 
        <div id="body">
            <span className="body-header">Ingredients:</span>
            <ul className="body-text ingredient ingredient-list">
            { drink.recipe.ingredients.map( ing => 
                <li className='ingredient'>
                    {capitalizeFirstLetter(ing.ingredientName)}
                </li> 
            )} 
            </ul>
            <span className="body-header">Garnish:</span>
            <ul className="body-text ingredient ingredient-list">
            {drink.recipe.garnish.length !== 0
                ? drink.recipe.garnish.map( garn => 
                <li className='ingredient'>
                    {capitalizeFirstLetter(garn)}
                </li>
                )
                :
                <small>
                    <i>No garnishes.</i>
                </small>
                
            } 
            </ul>
            <span className="body-header">Instructions:</span>
            {drink.recipe.instructions == undefined
                || drink.recipe.instructions == null
                || drink.recipe.instructions == ""
            ? 
            <p className="body-text">
                <small>
                    <i>No instructions left by author.</i>
                </small>
            </p>
            :
            <p className="body-text">
                <small>
                    {drink.recipe.instructions}
                </small>
            </p>
            }
        </div>
        <div id="buttons">
            {userType == "guest" 
                ? 
                <div id="buttons">
                    <button className="drink-buttons">Favourite this drink!</button>
                </div>
                : 
                <div id="buttons">
                    <button className="drink-buttons" onClick={()=>console.log("hello")}>Favourite this drink!</button>
                    <button className="drink-buttons">Edit your drink!</button>
                </div>
            }
        </div>
        </div>
    ) 
    : 
        <div>
            {/* add loading screen here */}
        </div>
} 
