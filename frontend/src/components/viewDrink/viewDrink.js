import React, { useEffect, useState } from 'react'
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { Link, useParams } from 'react-router-dom'
import { set } from 'mongoose'

export default function ViewDrink() {
    let { drinkId } = useParams()

    const [drink, setDrink] = useState({})
    const [userType, setUserType] = useState("")
    const [load, setLoad] = useState(false)
    const [favourites, setFavourites] = useState([])
    const [alreadyFavourited, setAlreadyFavourited] = useState(false)
    const [editing, setEditing] = useState(false)
    
    useEffect( () => {
        const timer = setTimeout(() => {
            setLoad(true)
        }, 150)
        return () => clearTimeout(timer)
    }, [])

    const loadStates = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/id/" + drinkId)
        .then(res => {
            if (userType !== "guest"){
                setDrink(res.data)
                if (user == res.data.author) {
                    setUserType("author")
                }
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
        else{
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

    const handleButtonChange = () => {
        if (alreadyFavourited) {
            AXIOS.put('/users/' + localStorage.getItem('loggedUsername') + '/favourite/remove', {
                drinkId: drinkId
            })
            .then( () => {
                AXIOS.put('/drinks/drink/unlike', {
                    drinkId: drinkId
                })
                .then( () => {
                    setAlreadyFavourited(!alreadyFavourited)
                    window.location.reload(false)
                })
            })
        }
        else {
            AXIOS.put('/users/' + localStorage.getItem('loggedUsername') + '/favourite/add', {
                drinkId: drinkId 
            })
            .then( () => {
                AXIOS.put('/drinks/drink/like', {
                    drinkId: drinkId
                })
                .then( () => {
                    setAlreadyFavourited(!alreadyFavourited)
                    window.location.reload(false)
                })
            })
        }
    }

    const toggleEditing = () => {
        // if currently editing
        if (editing) {
            // set it back to unblur
            document.getElementById("drink-info").style.filter = "blur(0px)"   
            document.getElementById("drink-info").style.pointerEvents = "auto" 
        }
        // if not editing
        else {
            // then set to blur
            document.getElementById("drink-info").style.filter = "blur(8px)"   
            document.getElementById("drink-info").style.pointerEvents = "none" 
        }
        setEditing(!editing)
    }

    const getIngredientsString = (drink) => {
        var ingredients = []
        drink.recipe.ingredients.map( ing => 
            ingredients.push(capitalizeFirstLetter(ing.ingredientName))
        ) 
        return ingredients.join(", ")
    }
    const getGarnishString = (drink) => {
        var ingredients = []
        drink.recipe.garnish.map( ing => 
            ingredients.push(capitalizeFirstLetter(ing))
        ) 
        return ingredients.join(", ")
    }

    const submitEdit = () => {
        var name = document.getElementById("drink-name-box").value || document.getElementById("drink-name-box").getAttribute("placeholder")
        var ingredients = document.getElementById("ingredients-box").value || document.getElementById("ingredients-box").getAttribute("placeholder")
        var garnish = document.getElementById("garnish-box").value || document.getElementById("garnish-box").getAttribute("placeholder")
        var instructions = document.getElementById("instructions-box").value || document.getElementById("instructions-box").getAttribute("placeholder")
        
        // for now
        var public_status = drink.public_status

        // TODO add public status whenever that's done as well
        // TODO add the call here whenever its done

        console.log(name)
        console.log(ingredients)
        console.log(garnish)
        console.log(instructions)
        console.log(public_status)

        toggleEditing()

    } 

    const EditPopup = () => {
        return (
            <div id="edit-popup">
            
                <div id="popup-title">
                <h2>Edit drink</h2> 
                <button id="close-button" onClick={() => toggleEditing()}>X</button>
                </div>
            
                <div id="popup-edit-entry">
                <label htmlFor="drink-name">Drink name</label>
                <input className="input" id="drink-name-box" name="drink-name" type="text" placeholder={drink.name}/>

                <label htmlFor="ingredients">Ingredients</label>
                <input className="input" id="ingredients-box" name="ingredients" type="text" placeholder={getIngredientsString(drink)}/>

                <label htmlFor="garnish">Garnish</label>
                <input className="input" id="garnish-box" name="garnish" type="text" placeholder={getGarnishString(drink)}/>

                <label htmlFor="instructions">Instructions</label>
                <textarea className='input instructions' id='instructions-box' name='instructions' spellCheck={false} placeholder={drink.recipe.instruction}></textarea>
                </div>

                <button id="popup-submit" onClick={() => submitEdit()}> unclick </button>

            </div>
        )
    } 
    
    return load 
        ? (
        <div id="view-drink">
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
                <li key={ing._id} className='ingredient'>
                    {capitalizeFirstLetter(ing.ingredientName)}
                </li> 
            )} 
            </ul>
            <span className="body-header">Garnish:</span>
            <ul className="body-text ingredient ingredient-list">
            {drink.recipe.garnish.length !== 0
                ? drink.recipe.garnish.map( (garn, i) => 
                <li key={i} className='ingredient'>
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
            {drink.recipe.instruction == undefined
                || drink.recipe.instruction == null
                || drink.recipe.instruction == ""
            ? 
            <p className="body-text">
                <small>
                    <i>No instructions left by author.</i>
                </small>
            </p>
            :
            <p className="body-text">
                <small>
                    {drink.recipe.instruction}
                </small>
            </p>
            }
        </div>
        <div id="buttons">
            {userType == "guest" 
                ? 
                    <></>
                : 
                userType == "admin" || userType == "author"
                ?
                <div id="buttons">
                <ul>
                <li>
                <div id="favourite-button" className="mimick-button">
                    <label>
                    <input type="checkbox" checked={alreadyFavourited} onChange={()=>handleButtonChange()}/>
                    <span>Favourite this drink!</span>
                    </label>
                </div>
                </li>
                <li>
                <div id="edit-button" className="mimick-button">
                    <label>
                    <input type="submit" onClick={() => toggleEditing()}/>
                    <span>Edit this drink!</span>
                    </label>
                </div>
                </li>
                </ul>
                </div>  
                :
                <></>
            }
        </div>      
        </div>
        {editing ? <EditPopup/> : <></>} 
        </div>
    ) 
    : 
        <div>
            {/* add loading screen here */}
        </div>
} 
