import React, { useEffect, useState } from 'react'
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { Link, useParams } from 'react-router-dom'

export default function ViewDrink() {
    let { drinkId } = useParams()

    const [drink, setDrink] = useState({})
    const [userType, setUserType] = useState("")
    const [load, setLoad] = useState(false)
    const [favourites, setFavourites] = useState([])
    const [alreadyFavourited, setAlreadyFavourited] = useState(false)
    
    useEffect( () => {
        const timer = setTimeout(() => {
            setLoad(true)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    const loadStates = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/id/" + drinkId)
        .then(res => {
            if (userType !== "guest"){
                setDrink(res.data)
                AXIOS.get("/users/" + user)
                .then(res => 
                    setFavourites(res.data.favourites)
                )
            } else {
                setDrink(res.data)
            }
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
        loadStates()
    }, []) 

    const alreadyInFavourites = () => {

        setAlreadyFavourited(
            favourites.some( e => e.name == drink.name && e.author == drink.author)
        ) 
    }

    useEffect ( () => {
        alreadyInFavourites()
    })

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ")
    }


    const favouriteDrink = () => {
    
        // TODO CHANGE BUTTONS TO CHECKBOXES
        // <input type='checkbox' onchange='handleChange(this);/>'
        // function handleChange(checkbox) {
        // if(checkbox.checked == true){
        //     document.getElementById("submit").removeAttribute("disabled");
        // }else{
        //     document.getElementById("submit").setAttribute("disabled", "disabled");
       // }
        // }


        AXIOS.put('/users/' + localStorage.getItem('loggedUsername') + '/favourite/add')
        .then( () => {
            AXIOS.put('/drinks/drink/like', {
                drinkId: drinkId
            })
            .then( () => {
                loadStates()
            }
            )
        })


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
                    <></>
                : 
                <div id="buttons">
                    <button id="favourite-button" className="drink-buttons" disabled={alreadyFavourited}>Favourite this drink!</button>
                    <button id="edit-button" className="drink-buttons">Edit your drink!</button>
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
