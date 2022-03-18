import React, { Component, useState } from 'react';
// import axios from 'axios';
import AXIOS from '../../axios.config'
import { Link } from 'react-router-dom';
import './createDrink.css';

export default function CreateDrink() {
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

    const [ingredientList, setIngredientList] = useState([])

    const [ingredient, setIngredient] = useState("")


    const [garnish, setGarnish] = useState({
        list:""
    })

    const addIngredient = (e) => {
        e.preventDefault()
        if (ingredient.length != 0) {
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
    }

    // const onChangeIngredientName = (e) => {
    //     setIngredient({
    //         ...ingredient,
    //         [e.target.name]: e.target.value
    //     })
    // }

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

    const onChangeDrinkAuthor = (e) => {
        setDrink({
            ...drink,
            [e.target.name]: e.target.value
        })
    }
    
    const addDrink = (e) => {
        e.preventDefault()
        var div2 = document.getElementById("stepTwo")
        var div3 = document.getElementById("stepThree")

        
        const garnishList = garnish.list.split(',')

        setDrink({
            ... drink,
            recipe :{
                ingredients: ingredientList,
                garnish: garnishList
            }
        })

        AXIOS.post('/drinks/add', drink)
        .then(res => {
            console.log(res.data);
            if (res.status == 201) {
                div2.style.display = "none";
                div3.style.display = "block"
            }})
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        })

        console.log(drink)
    }

    const stepTwo = () => {
        var div1 = document.getElementById("stepOne")
        var div2 = document.getElementById("stepTwo")
    
        

        if (ingredientList.length != 0) {
            div1.style.display = "none"
            div2.style.display = "block"
        }
    }

    return (
        <>
        <div>
            <h2 id="create">Create</h2>
            <div id="stepOne">
                <h3>Step 1.</h3>
                <h3>Add the ingredients that are in your drink</h3>
                <div className="stepBox">
                <form>
                    <input type="text"
                        name="ingredient"
                        placeholder='Ingredient'
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)}></input>
                    <br></br><br></br>
                    <button onClick={addIngredient}>Add Ingredient</button>
                </form>

                <ul>
                    {ingredientList.map(item => (
                        <li className='ingredient'>{item.ingredientName}</li>
                    ))}
                </ul>

                <button onClick={stepTwo}>Step 2</button>
                </div>
            </div>
            
            <div id="stepTwo" style={{display: "none"}}>
                <h3>Step 2.</h3>
                <h3>Write the recipe, and make sure to include tags!</h3>

                <div className='stepBox'>
                <form>
                <input type="text"
                        name="name"
                        placeholder="Drink Name"
                        onChange={onChangeDrinkName}
                        ></input>
                    <br></br>

                <input type="text"
                        name="list"
                        value={garnish.list}
                        onChange={onChangeRecipeGarnish}
                        placeholder="Garnish"></input>
                        <br></br>

                <input type="text"
                        name="instructions"
                        placeholder='Instructions'
                        onChange={onChangeRecipeInstructions}
                        width='100%'
                        size='100%'></input>

                <input type="text"
                        name="author"
                        placeholder="Drink Author"
                        onChange={onChangeDrinkAuthor}
                        ></input>                <br></br>
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

                    <input type="button" onClick={ addDrink }value="Add Drink"></input>
                </form>
                </div>
            </div>
            <div id="stepThree" style={{display: "none"}}>
                <h1>your drink was made

                </h1>
            </div>
        </div>
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
