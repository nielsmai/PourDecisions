import React, { Component, useState } from 'react';
// import axios from 'axios';
import AXIOS from '../../axios.config'
import { Link } from 'react-router-dom';

export default function CreateDrink() {

    const [name, setDrink] = useState("");
    const [pub, setPublic] = useState(false);
    const [rating, setRating] = useState(0);

    const[ingredientData, setIngredientData] = useState([])

    const getData = async () => {
        // const response = await axios.get('http://localhost:5000/drinks/ingredients/all')
        console.log(process.env.REACT_APP_API_HOST)
        const response = await AXIOS.get('/drinks/ingredients/all')
        
        console.log(response.data)
        
        setIngredientData(response.data)
            
    }

    return (
        <>
        <nav>
            <div>
                <Link to="/drinks/ingredients">Add a missing ingredient</Link>
            </div>
        </nav>
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

        <h2>Create Drink</h2>
        <h3>Step 1.</h3>
        <h3>Add the ingredients that are in your drink</h3>

        <form>

            <input type="text"
                name="ingredient"
                placeholder='Ingredient'></input>
            <br></br><br></br>
            <input type="submit" value="Submit"></input>
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
        
        // axios.post('http://localhost:5000/drinks/add/ingredient', formData)
        //     .then(res => console.log(res.data))
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
        // const response = await axios.get('http://localhost:5000/drinks/ingredients/all')
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
