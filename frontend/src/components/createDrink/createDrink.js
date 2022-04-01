import React, { useState } from 'react';
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

    const [checked, setChecked] = useState(false)

    const [garnish, setGarnish] = useState({
        list:""
    })

    const [tag, setTag] = useState("CUSTOM")

    const addIngredient = (e) => {
        e.preventDefault()
        if (ingredient.length !== 0) {
            setIngredientList([
                ...ingredientList,
                {
                    ingredientName: ingredient.toUpperCase(),
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

        const garnishList = garnish.list.split(',')

        setDrink({
            ...drink,
            recipe: {
                ...drink.recipe,
                [e.target.name]: e.target.value,
                garnish: garnishList
            }
        })
    }

    const onChangeDrinkName = (e) => {

        var drinkAuthor = window.localStorage.getItem('loggedUsername')
        if (drinkAuthor === null) {
            drinkAuthor = "guest"
        }

        setDrink({
            ...drink,
            [e.target.name]: e.target.value,
            author:drinkAuthor,
            public_status: false,
            recipe: {
                ingredients:ingredientList
            }
        })
    }

    function toggle(value) {
        return !value
    }

    const onChangePublic = (e) => {
        setChecked(toggle)
        setDrink({
            ...drink,
            public_status:(!checked)
        })
    }

    const onChangeTag = (e) => {
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
            },
        })

        AXIOS.post('/drinks/add', drink)
        .then(res => {
            if (res.status === 201) {
                div2.style.display = "none";
                div3.style.display = "block"
            }})
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        })
    }

    const stepTwo = () => {
        var div1 = document.getElementById("stepOne")
        var div2 = document.getElementById("stepTwo")
    
        if (ingredientList.length !== 0) {
            div1.style.display = "none"
            div2.style.display = "block"
        }
    }

    if (window.localStorage.getItem('loggedUsername') === "admin") {
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
                            onChange={e => setIngredient(e.target.value)}
                            className="stepText"></input>
                        <br></br><br></br>
                        <button onClick={addIngredient} className="drinkButton">Add Ingredient</button>
                    </form>
    
                    <ul className='ingredientList'>
                        {ingredientList.map(item => (
                            <li className='ingredient'>{item.ingredientName}</li>
                        ))}
                    </ul>
    
                    <button onClick={stepTwo} className="drinkButton">Step 2</button>
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
                            className="stepText"
                            ></input>
                        <br></br>
    
                    <input type="text"
                            name="list"
                            value={garnish.list}
                            onChange={onChangeRecipeGarnish}
                            placeholder="Garnish"
                            className="stepText"></input>
                            <br></br>
    
                    <input type="text"
                            name="instruction"
                            placeholder='Instructions'
                            onChange={onChangeRecipeInstructions}
                            width='100%'
                            size='100%'
                            className="stepText2"></input>
                            <br></br>
    
                    <input type="checkbox" 
                            name="pub"
                            checked={ checked }
                            onChange= {onChangePublic}>
                            </input>
                        
                        <label for="public">Public</label>
                        <br></br><br></br>

                        
                    <select name="tag" onChange={ onChangeTag }>
                    <option value="CUSTOM">CUSTOM</option>
                    <option value ="ALCOHOLIC">ALCOHOLIC</option>
                    <option value ="MOCKTAIL">MOCKTAIL</option>
                    <option value ="CLASSIC">CLASSIC</option>
                    </select>
                    <br></br><br></br>
    
                        <input type="button" onClick={ addDrink }value="Add Drink" className='drinkButton'></input>
                    </form>
                    </div>
                </div>
                <div id="stepThree" style={{display: "none"}}>
                    <h1> Congratulations! Your drink was made. You can now find it on the View tab.
                        
                    </h1>
                    <Link to="/">Return to Home</Link>
                </div>
            </div>
            </>
        )
    }
    if (window.localStorage.getItem('loggedUsername')) {
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
                            onChange={e => setIngredient(e.target.value)}
                            className="stepText"></input>
                        <br></br><br></br>
                        <button onClick={addIngredient} className="drinkButton">Add Ingredient</button>
                    </form>
    
                    <ul className='ingredientList'>
                        {ingredientList.map(item => (
                            <li className='ingredient'>{item.ingredientName}</li>
                        ))}
                    </ul>
    
                    <button onClick={stepTwo} className="drinkButton">Step 2</button>
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
                            className="stepText"
                            ></input>
                        <br></br>
    
                    <input type="text"
                            name="list"
                            value={garnish.list}
                            onChange={onChangeRecipeGarnish}
                            placeholder="Garnish"
                            className="stepText"></input>
                            <br></br>
    
                    <input type="text"
                            name="instruction"
                            placeholder='Instructions'
                            onChange={onChangeRecipeInstructions}
                            width='100%'
                            size='100%'
                            className="stepText2"></input>
                            <br></br>
    
                    <input type="checkbox" 
                            name="pub"
                            checked={ checked }
                            onChange= {onChangePublic}>
                            </input>
                        
                        <label for="public">Public</label>
                        <br></br><br></br>
    
                        <input type="button" onClick={ addDrink }value="Add Drink" className='drinkButton'></input>
                    </form>
                    </div>
                </div>
                <div id="stepThree" style={{display: "none"}}>
                    <h1> Congratulations! Your drink was made. You can now find it on the View tab.
                        
                    </h1>
                    <Link to="/">Return to Home</Link>
                </div>
            </div>
            </>
        )
    }
    else {
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
                            onChange={e => setIngredient(e.target.value)}
                            className="stepText"></input>
                        <br></br><br></br>
                        <button onClick={addIngredient} className="drinkButton">Add Ingredient</button>
                    </form>
    
                    <ul className='ingredientList'>
                        {ingredientList.map(item => (
                            <li className='ingredient'>{item.ingredientName}</li>
                        ))}
                    </ul>
    
                    <button onClick={stepTwo} className="drinkButton">Step 2</button>
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
                            className="stepText"
                            ></input>
                        <br></br>
    
                    <input type="text"
                            name="list"
                            value={garnish.list}
                            onChange={onChangeRecipeGarnish}
                            placeholder="Garnish"
                            className="stepText"></input>
                            <br></br>
    
                    <input type="text"
                            name="instruction"
                            placeholder='Instructions'
                            onChange={onChangeRecipeInstructions}
                            width='100%'
                            size='100%'
                            className="stepText2"></input>
                            <br></br>
    
                    <input type="checkbox" 
                            name="pub"
                            checked={ checked }
                            onChange= {onChangePublic}>
                            </input>
                        
                        <label for="public">Public</label>
                        <br></br><br></br>
    
                        <input type="button" onClick={ addDrink }value="Add Drink" className='drinkButton'></input>
                    </form>
                    </div>
                </div>
                <div id="stepThree" style={{display: "none"}}>
                    <h1> Congratulations! Your drink was made. You can now find it on the View tab.
                    </h1>
                    <Link to="/">Return to Home</Link>
                </div>
            </div>
            </>
        )
    }
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
