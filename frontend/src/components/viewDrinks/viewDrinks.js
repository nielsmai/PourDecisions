import { useState } from 'react';
import './viewDrinks.css';
import Popup from './components/editDrinkPopup.js';
import AXIOS from "../../axios.config"

function ViewDrinks() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [ingredientList, setIngredientList] = useState([])
    const [ingredient, setIngredient] = useState("")
    const [garnish, setGarnish] = useState({
        list:""
    })
    const [instructions, setInstructions] = useState("");

    const [drink, setDrink] = useState({
        name: "",
        author: "",
        recipe: {
            ingredients: [
                {
                    ingredientName: "",
                    ingredientType: ""
                }
            ],
            garnish: "",
            instructions: ""
        }
    })
    const addIngredient = (e) => {
        e.preventDefault()
        setIngredientList([
            ...ingredientList,
            {
                ingredientName: ingredient,
                ingredientType: "OTHER"
            }
        ])

        setDrink({
            ... drink,
            recipe :{
                ingredients: ingredientList
            }
        })
        setIngredient('')
    }
    const onChangeRecipeGarnish = (e) => {
        setGarnish({
            ...garnish,
            [e.target.name]: e.target.value
        })

        const garnishList = garnish.list.split(',')

        setDrink({
            ... drink,
            recipe :{
                ingredients: ingredientList,
                garnish: garnishList
            }
        })
    }
    const onChangeRecipeInstructions = (e) => {
        setDrink({
            ...drink,
            recipe: {
                ...drink.recipe,
                [e.target.name]: e.target.value
            }
        })
    }
    const onChangeDrinkName = (e) => {
        setDrink({
            ...drink,
            [e.target.name]: e.target.value,
        })

    }

    const [currentDrink, setCurrentDrink] = useState([]);

    const getData = async () => {

        const response = await AXIOS.get('drinks/:username')
        
        console.log(response.data)
        
        setCurrentDrink(response.data)
            
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const PostData = async () => {

    
    }

    return (
    <div className="viewDrinks">
        <div class="viewDrinksContainer">
            <div class="rowViewDrinks">
                <div class="columnLeftViewDrinks">
                    <div class="pageTitle">
                        <h1>{ drink.name }</h1>
                    </div>
                </div>
                <div class="columnRightViewDrinks">
                    <div class="likeCount">
                        <h1>58 Likes</h1>
                    </div>
                </div>
            </div>

            <div class="drinksTag">
                <h3 class="alcoholicTag">Alcoholic</h3>
            </div>

            <div class="ingredientsList">
                <h2>Ingredients:</h2>
                <p class="ingredients">
                    {drink.ingredientList}
                </p>
            </div>
            
            <div class="garnishList">
                <h2>Garnish:</h2>
                <p>
                    { drink.garnishList }
                </p>
            </div>

            <div class="instructionsList">
                <h2>Instructions:</h2>
                <p>
                    { drink.instructions }
                </p>
            </div>
        </div>

        <div class="addToFavouritesButton">
            <button type="button" class="addToFavouritesConfirm">Add To Favourites!</button>
        </div>

        <div class="editDrink">
            <button onClick={() => setButtonPopup(true)}>Edit this drink</button>
        </div> 
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={handleSubmit}>
                <h3>Edit Recipe</h3>
                <label>Name:
                    <input type="text" name="drinkName" placeholder="Please input new drink name" onChange={onChangeDrinkName}/>
                    <input type="button" onClick={onChangeDrinkName} value="Confirm Change"></input>
                </label>

                <br></br>

                <label>Ingredients:
                    <ul>
                        {ingredientList.map(item => (
                            <li>{item.ingredientName}</li>
                        ))}
                    </ul>
                </label>

                <br></br>

                <label>Garnish:
                    <input type="text" name="garnish" placeholder="List the garnishes" onChange={onChangeRecipeGarnish}/>
                    <input type="button" onClick={onChangeRecipeGarnish} value="Confirm Change"></input>
                </label>

                <br></br>

                <label>Instructions:
                    <input type="text" name="instructions" placeholder="List the instructions" onChange={onChangeRecipeInstructions}/>
                    <input type="button" onClick={onChangeRecipeInstructions} value="Confirm Change"></input>
                </label>


            </form>
        </Popup> 

    </div>
    );
                        }
} export default ViewDrinks 