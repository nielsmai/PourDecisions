import React, { useEffect, useState } from 'react';
import AXIOS from '../../axios.config'
import './viewDrinks.css'

export default function ViewDrinks() {

    const [listOfDrinks, setListOfDrinks] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const [checkboxes, setCheckboxes] = useState([])

    const getDrinks = () => {
        AXIOS.get("/drinks/")
        .then(res => { setListOfDrinks(res.data) })
    }

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ").join('').split(' ')
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ")
    }

    const getIngredientName = (ingredient) => { 
        var ingredientList = 
            ingredient.map( ing => capitalizeFirstLetter(ing.ingredientName))
            .toString().replace(/,/g, ', ')

        return(
            <>
                {ingredientList}
            </>
        )
    }

    useEffect( () => {
        getDrinks()
    }, [])

    return (
        <div id="myDrinks">
            <div id="search">
                <input 
                    type='text' 
                    placeholder='Search drink by name...' 
                    onChange={(e) => {setSearchInput(e.target.value)}}
                />
            </div>

            <ul id="drinkList">
                {listOfDrinks.filter(drink => drink.name.toLowerCase()
                .includes(searchInput.toLowerCase())).map(drink => (
                    <li key={drink._id}>
                        <table className="drinkInfo">
                        <tbody>
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

                        {/* <td className="ingredients" colSpan={3}>
                            Ingredients: {getIngredientName(drink.recipe.ingredients)}
                        </td>  */}
                        </tbody>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    )
}