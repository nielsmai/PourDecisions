import React, { useEffect, useState } from 'react';
import './viewCustomDrink.css'
import AXIOS from '../../axios.config'
import { Link } from 'react-router-dom';

export default function ViewCustomDrink() {

    const [listOfDrinks, setListOfDrinks] = useState([])
    // const [filteredDrinks, setFilteredDrinks] = useState(listOfDrinks)
    const [searchInput, setSearchInput] = useState("")
    const [checkboxes, setCheckboxes] = useState([false, false])


    const getDrinks = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/" + user)
        .then( res => {
            setListOfDrinks(res.data)
        })
    } 
    
    const sortDrinks = () => {
        // sort by newest
        if (checkboxes[0]) {
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
        // sort by popularity
        else if (checkboxes[1]) {
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
        // no sort
        else {
            return listOfDrinks
        }
    } 

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ").filter(word => word)
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1).toLowerCase();
        }

        return words.join(" ")
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
            ingredient.map( ing => capitalizeFirstLetter(ing.ingredientName))
            .toString().replace(/,/g, ', ')

        return(
            <>
                {ingredientList}
            </>
        )
    }

    const Sort = () => {

        // because other tags are a mess right now
        // const checkboxNames = ['Alcoholic', 'Mocktail', 'Custom', 'Newest', 'Popularity']
        const checkboxNames = ['Newest', 'Popularity']
    
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

                {/* search by name */}
                {sortDrinks().filter(drink => drink.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map( drink => ( 
                    <Link to={"/account/drinks/id/" + drink._id}>
                    <li key={drink._id}>
                        <table className="drinkInfo">
                        <tbody>
                        <tr>
                        <td className="name">
                            {capitalizeFirstLetter(drink.name)}
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
                        </tbody>
                        </table>
                    </li>    

                    </Link>
                ))}
            </ul>
        </div>
    );
}

