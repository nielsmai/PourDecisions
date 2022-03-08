import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

var CONNECTION_URL;
if (process.env.NODE_ENV === "production"){
    CONNECTION_URL = process.env.ATLAS_URI;
}else{
    CONNECTION_URL = "http://localhost:5000/";
}
var AXIOS = axios.create({
    baseURL: CONNECTION_URL
})

export default function CreateDrink() {

    const [pub, setPublic] = useState(false)
    const [rating, setRating] = useState(0)
    const[ingredientData, setIngredientData] = useState([])

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
            instruction: ""
        }
    })

    const getData = async () => {
        const response = await AXIOS.get('/drinks/ingredients/all')
        
        console.log(response.data)
        
        setIngredientData(response.data)
    }

    const [ingredient, setIngredient] = useState({
        ingredientName:"",
        ingredientType:""
    })
    const ingredients = []

    const addIngredient = (e) => {
        e.preventDefault()
        setDrink({
            ... drink,
            recipe :{
                ingredients: [{
                    ingredients
                }]
            }
        })
        console.log(drink)
        console.log(ingredient.ingredientName)
        ingredients.push(ingredient)
        console.log(ingredients)
    }

    const onChangeIN = (e) => {
        
        setIngredient((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    return (
        <>
        <nav>
            <div>
                <Link to="/drinks/ingredients">Add a missing ingredient</Link>
            </div>
        </nav>
        {/* <div>
            <h3>Ingredient list</h3>
            <button onClick={getData}>Show ingredients</button>
            {
                ingredientData && ingredientData.map((ingredientData, index) =>
                {
                    const ingredientName = ingredientData.ingredientName
                    const ingredientType = ingredientData.ingredientType
                
                
                return (
                    <div key={index}>
                        <h4>{ingredientName} [{ingredientType}]</h4>
                    </div>
                );
                })}
        </div> */}

        <h2>Create Drink</h2>
        <h3>Step 1.</h3>
        <h3>Add the ingredients that are in your drink</h3>

        <form onSubmit={ addIngredient } >
            <input type="text"
                name="ingredientName"
                placeholder='Ingredient'
                value={ingredient.ingredientName}
                onChange={onChangeIN}></input>
            <br></br><br></br>
            <button onClick={addIngredient}>Add Ingredient</button>
        </form>

        <h3>Step 2.</h3>
        <h3>Write the recipe, and make sure to include tags!</h3>

        <form>
        <input type="text"
                name="drinkName"
                placeholder="Drink Name">
                </input>
            <br></br>
        <input type="text"
                name="garnish"
                placeholder="Garnish"></input>
                <br></br>
        <input type="text"
                name="instructionList"
                placeholder='Instructions'
                width='100%'
                size='100%'></input>
                <br></br>
        <input type="checkbox" 
                name="pub"
                >
                </input>
            
            <label for="public">Public</label>
            <br></br>
            <label value="tagsLabel">Tag: </label>
            <select name="tags">
            <option value="CUSTOM">CUSTOM</option>
            <option value ="ALCOHOLIC">ALCOHOLIC</option>
            <option value ="MOCKTAIL">MOCKTAIL</option>
            <option value ="CLASSIC">CLASSIC</option>
            </select>
            <br></br><br></br>

            <input type="submit" value="Submit"></input>
        </form>

        </>
    )
}

export function CreateRecipe() {

}

export function CreateIngredient() {

    const[formData, setFormData] = useState({
        ingredientName: '',
        ingredientType: ''
    })

    const { ingredientName, ingredientType } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log("Form submitted")
        console.log(ingredientName)
        console.log(ingredientType)
        
        AXIOS.post('/drinks/add/ingredient', formData)
            .then(res => console.log(res.data))
    }

    return (
        <>
        <section className="heading">
            <h1>Create an ingredient</h1>
        </section>

        <section className="form">
            <form onSubmit={ onSubmit }>
                <input type='text' id='ingredientName' name='ingredientName' value= { ingredientName } placeholder='Enter ingredient name'
                onChange={ onChange } />
                <input type='text' id='ingredientType' name='ingredientType' value= { ingredientType } placeholder='Enter ingredient type'
                onChange={ onChange } />
                <button type='submit'>Submit</button>
            </form>
        </section>
        </>
    )
}

export function IngredientsList() {

    const[ingredientData, setIngredientData] = useState([])

    const getData = async () => {
        const response = await AXIOS.get('/drinks/ingredients/all')
        
        console.log(response.data)
        
        setIngredientData(response.data)
            
    }

    return (
        <>
        <div>
            <h3>Ingredient list</h3>
            <button onClick={getData}>Show ingredients</button>
            {
                ingredientData && ingredientData.map((ingredientData, index) =>
                {
                    const ingredientName = ingredientData.ingredientName
                    const ingredientType = ingredientData.ingredientType
                
                
                return (
                    <div key={index}>
                        <h4>{ingredientName} [{ingredientType}]</h4>
                    </div>
                );
                })}
        </div>
        </>
    )
}