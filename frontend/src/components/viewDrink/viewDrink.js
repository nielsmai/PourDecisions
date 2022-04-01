import React, { useEffect, useState } from 'react'
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { useParams } from 'react-router-dom'

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
        let unmounted = false
        if (localStorage.getItem('loggedIn') === null){
            if (!unmounted)
            setUserType("guest")
        }
        else if (localStorage.getItem('loggedUsername') == 'admin') {
            if (!unmounted)
            setUserType("admin") 
        }
        else{
            if (!unmounted)
            setUserType("user")
        }
        if (!unmounted)
        loadStates()
        return () => {unmounted = true}
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
        const words = str.split(" ").filter(word => word)
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1).toLowerCase();
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
            document.getElementById("drink-info").style.filter = "blur(6px)"   
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

        // TODO add the call here whenever its done
        if (userType == "admin" || userType == "author"){
            var name = document.getElementById("drink-name-box").value || document.getElementById("drink-name-box").getAttribute("placeholder")
            var ingredientsString = document.getElementById("ingredients-box").value || document.getElementById("ingredients-box").getAttribute("placeholder")
            var garnishList = document.getElementById("garnish-box").value || document.getElementById("garnish-box").getAttribute("placeholder")
            var instructions = document.getElementById("instructions-box").value || document.getElementById("instructions-box").getAttribute("placeholder")
            var public_status = document.querySelector("#public-status-box").checked
            var ingredients = []
            var garnish = []

            // parse ingredientsString
            ingredientsString.split(', ').map( name => (
                ingredients.push(
                    {
                        ingredientName: name
                    }
                )  
            ))

            // parse garnishList
            garnishList.split(', ').map( name => {
                garnish.push(name)
            })

            // create a recipe
            var recipe = {
                ingredients: ingredients,
                garnish: garnish,
                instruction: instructions
            }

            AXIOS.put('/drinks/update/' + drink.author + '/' + drinkId, {
                name: name,
                recipe: recipe,
                public_status: public_status
            })
            .then( () => toggleEditing())
            .then( () => window.location.reload(false))

        }

    } 

    const EditPopup = () => {
        const [publicStatus, setPublicStatus] = useState(drink.public_status)
        return (
            <div id="edit-popup">
            
                <div id="popup-title">
                <h2>Edit drink</h2> 
                <button id="close-button" onClick={() => toggleEditing()}>X</button>
                </div>
            
                <div id="popup-edit-entry">
                <label htmlFor="drink-name">Drink name</label>
                <input className="input" id="drink-name-box" name="drink-name" type="text" placeholder={capitalizeFirstLetter(drink.name)}/>

                <label htmlFor="ingredients">Ingredients</label>
                <input className="input" id="ingredients-box" name="ingredients" type="text" placeholder={capitalizeFirstLetter(getIngredientsString(drink))}/>

                <label htmlFor="garnish">Garnish</label>
                <input className="input" id="garnish-box" name="garnish" type="text" placeholder={capitalizeFirstLetter(getGarnishString(drink))}/>

                <label htmlFor="instructions">Instructions</label>
                <textarea className='input instructions' id='instructions-box' name='instructions' spellCheck={false} placeholder={drink.recipe.instruction}></textarea>

                <label>
                Public
                <input type="checkbox" id="public-status-box" checked={publicStatus} onChange={() => setPublicStatus(!publicStatus)}/> 
                </label>


                </div>

                <div>
                <button id="popup-submit" onClick={() => submitEdit()}> Submit </button>
                </div>

            </div>
        )
    } 
    
    return load 
        ? (
        <div id="view-drink">
        <div id="drink-info">
        <div id="top-bar">
            <span id="drink-name" className="top-bar-element left">{capitalizeFirstLetter(drink.name)}</span>
            <span id="drink-rating" className="top-bar-element left">{drink.rating + " likes"}</span>
            <span id="drink-tag" className="top-bar-element right">{drink.tag}</span>
            <span id="drink-author" className="top-bar-element left">{"made by " + drink.author}</span>
            <span id="drink-status" className="top-bar-element left">
            {drink.public_status 
                ? <label style={{color: "#328453"}}>PUBLIC</label>
                : <label style={{color: "#892e59"}}>PRIVATE</label>
            }
            </span>
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
                </ul>
                </div>  
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
