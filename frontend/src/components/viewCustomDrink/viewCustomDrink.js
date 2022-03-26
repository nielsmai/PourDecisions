import React, { useEffect, useState } from 'react';
import './viewCustomDrink.css'
import AXIOS from '../../axios.config'
import { Link } from 'react-router-dom';

export default function ViewCustomDrink() {

    const [listOfDrinks, setListOfDrinks] = useState([])
    // const [filteredDrinks, setFilteredDrinks] = useState(listOfDrinks)
    const [searchInput, setSearchInput] = useState("")
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false])


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

    const Sort = () => {

        const checkboxNames = ['Alcoholic', 'Mocktail', 'Custom', 'Newest', 'Popularity']
    
        const handleSort = (e, i) => {
            const {checked} = e.target 
            setCheckboxes(
                checkboxes.map((_, idx) => idx === i ? checked : false)
            )
        }

        return(
            <>
                {checkboxes.map((selected, i) => (
                    <div className='mimickButton'>
                        <label>
                            <input 
                            key={i}
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
                {listOfDrinks.filter(drink => drink.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map( drink => ( 

                    <Link to={"/account/drinks/" + drink.name.replace(/ /g, '_')}>
                    <li key={drink._id}>
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

