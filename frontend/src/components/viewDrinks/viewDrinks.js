import React, { useEffect, useState } from 'react';
import AXIOS from '../../axios.config'
import './viewDrinks.css'
import { Link } from 'react-router-dom';

export default function ViewDrinks() {

    const [listOfDrinks, setListOfDrinks] = useState([]); 
    const [searchInput, setSearchInput] = useState("")
    const [checkboxes, setCheckboxes] = useState([false, false, false, false])

    const getDrinks = () => {
        AXIOS.get("/drinks/")
        .then(res => { setListOfDrinks(res.data) })
    }

    const sortDrinks = () => {
        // alcoholic
        if (checkboxes[0]) {
            const copy = listOfDrinks.filter(drink => drink.tag === "ALCOHOLIC")
            return copy
        }
        // mocktail
        else if (checkboxes[1]) {
            const copy = listOfDrinks.filter(drink => drink.tag === "MOCKTAIL")
            return copy
        }
        // newest 
        if (checkboxes[2]) {
            const copy = [...listOfDrinks]
            const sortByDate = (a, b) => {
                if ( a.createdAt < b.createdAt ){
                    return 1
                }
                if (a.createdAt > b.createdAt ){
                    return -1 
                }
                else return 0
            }
            return copy.sort(sortByDate)

        }
        // popularity
        else if (checkboxes[3]) {
            const copy = [...listOfDrinks]
            const sortByPopularity = (a, b) => {
                if ( a.rating < b.rating ){
                    return 1
                }
                if (a.rating > b.rating ){
                    return -1 
                }
                else return 0
            }
            return copy.sort(sortByPopularity)
        }
        else {
            return listOfDrinks
        }
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

    const Sort = () => {
        const checkboxNames = ['Alcoholic', 'Mocktail', 'Newest', 'Popularity']
    
        const handleSort = (e, i) => {
            const {checked} = e.target 
            setCheckboxes(
                checkboxes.map((_, idx) => idx === i ? checked : false)
            )
        }

        return(
            <>
                {checkboxes.map((selected, i) => (
                    <div key={i} className='mimickButton'>
                        <label>
                            <input 
                            type='checkbox'
                            checked={selected}
                            onChange={e => handleSort(e, i)}
                            />
                            <span>{checkboxNames[i]} </span>
                        </label>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div id="myDrinks">
            <div id="search">
                <input 
                    type='text' 
                    placeholder='Search drink by name...' 
                    onChange={(e) => {setSearchInput(e.target.value)}}
                />
            </div>

            <div id="sort">
                <Sort/>
            </div>

            <ul id="drinkList">
                {sortDrinks().filter(drink => drink.name.toLowerCase()
                .includes(searchInput.toLowerCase())).map(drink => (
                    <Link to={"/account/drinks/id/" + drink._id}>
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

                        <td className="ingredients" colSpan={3}>
                            Ingredients: {getIngredientName(drink.recipe.ingredients)}
                        </td> 
                        </tbody>
                        </table>
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}