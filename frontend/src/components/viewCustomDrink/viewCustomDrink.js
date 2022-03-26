import React, { useEffect, useState } from 'react';
import './viewCustomDrink.css'
import AXIOS from '../../axios.config'
import { Link } from 'react-router-dom';

export default function ViewCustomDrink() {

    const [listOfDrinks, setListOfDrinks] = useState([])

    const getDrinks = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/" + user)
        .then( res => {
            setListOfDrinks(res.data)
        })
    } 

    useEffect( () => {
        if (localStorage.getItem('loggedIn') === null){
            window.location.href = 
            (process.env.REACT_APP_CLIENT_HOST ?
                process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT 
                : "http://localhost:3000")
        } 
        getDrinks()

    }, []) 

    const getIngredientName = (ingredient) => {
        var ingredientList = 
            ingredient.map( ing => ing.ingredientName)
            .toString().replace(/,/g, ', ')

        return(
            <>
                {ingredientList}
            </>
        )
    }

    return (
        <div id="myDrinks">
            <ul id="drinkList">

                {listOfDrinks.map( drink => (
                    <Link to={"/account/drinks/" + drink.name.replace(/ /g, '_')}>
                    <li>
                        <table className="drinkInfo">
                       
                        <tr>
                        <td className="name">
                            {drink.name}
                        </td>
                        <td className="rating">
                            {drink.rating + " likes"} 
                        </td>
                        <td className="tag">
                            {drink.tag}
                        </td>
                        </tr>

                        <tr> 
                        <td className="ingredients" colSpan={3}>
                            Ingredients: {getIngredientName(drink.recipe.ingredients)}
                        </td> 
                        </tr>
                        
                        </table>
                    </li>    

                    </Link>
                ))}
            </ul>
        </div>
    );
}

