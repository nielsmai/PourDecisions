import { Component } from "react";
import { Link } from "react-router-dom"
import AXIOS from '../../axios.config'
import './ingredientSearch.css'

export default class ingredientSearch extends Component {
    constructor(props) {
        super(props)

        this.addIngredients = this.addIngredients.bind(this)
        this.search = this.search.bind(this)
        this.delete = this.delete.bind(this)
        this.clear = this.clear.bind(this)
        this.toggleMixed = this.toggleMixed.bind(this)

        this.state = {
            ingredients: [],
            ingredientsOpts: new Set(),
            drinks: [],
            current: [],
            mixed: false
        }
    }
    addIngredients = (e) => {

        this.setState({ ingredients: [...this.state.ingredients, e.target.value] })

        // let temp = [...this.state.ingredientsOpts]

        // if (temp.length === 1) temp = []

        // else temp.splice(temp.indexOf(e.target.value), 1)

        // this.setState({ ingredientsOpts: new Set(temp) })

        var selections = document.getElementById("dropdown")

        for (var i = 0; i < selections.options.length; i++) {
            if (selections.options[i].value === e.target.value) {
                console.log("disabling")
                selections.options[i].disabled = true
            }
        }
    }

    componentDidMount() {
        AXIOS.get('/drinks/').then(res => {
            this.setState({ drinks: res.data })
        }).then(() => {
            let temp = new Set()
            for (let drink of this.state.drinks) {

                if(drink.public_status === true)
                    {let ingredients = drink.recipe.ingredients

                    for (let ingredient of ingredients) {
                        temp.add(ingredient.ingredientName)

                    }}
            }
            this.setState({ ingredientsOpts: temp })
        })
    }
    search() {
        console.log(this.state.ingredients)
        AXIOS.get('/drinks/filter/ingredients/all', {
            params: { ingredients: this.state.ingredients }
        }).then(res => {
            console.log(res)
            this.setState({ current: res.data })
        }).then(!this.state.mixed ? this.toggleMixed : null)
        .then(document.getElementById("dropdown").selectedIndex = 0)
    }

    delete = (name) => {
        let temp = [...this.state.ingredients]

        if (temp.length === 1) temp = []

        else temp.splice(temp.indexOf(name), 1)

        this.setState({ ingredients: temp })

        // let replenish = [...this.state.ingredientsOpts]

        // replenish.push(name)

        // this.setState({ ingredientsOpts: new Set(replenish) })

        var list = document.getElementById("dropdown").options
        for (let option of list) {
            if (option.value === name) option.disabled = false
        }
        list.selectedIndex = 0;
    }

    clear = () => {
        // let temp = [...this.state.ingredientsOpts, ...this.state.ingredients]
        // this.setState({ ingredientsOpts: new Set(temp) })
        var list = document.getElementById("dropdown").options
        for (let selected of this.state.ingredients) {
            for (let option of list) {
                if (option.value === selected) option.disabled = false
            }
        }
        list.selectedIndex = 0;

        this.setState({ ingredients: [] })
        if (this.state.mixed) this.setState({ mixed: !this.state.mixed })
        
    }

    toggleMixed = () => this.setState({ mixed: !this.state.mixed })

    render() {
        return (

            <div>
                <div id="mainblock">
                    <div>
                        <p id="mainblockPrompt">
                            <label id="big">MIX</label><br></br>
                            Select the ingredients you've got at home,
                            <br></br>to see what drinks you can make!
                        </p>
                    </div>
                    <div id="subblock">
                        <label id="mainblockTitle">Selected</label>
                        <div id="selection">
                            <ul class="horizontal" id="ingredientselect">
                                {this.state.ingredients.map(ingredient => (
                                    <li key={ingredient} id="lingredient">
                                        <label id="ingOptName">{ingredient}</label>
                                        <button onClick={() => this.delete(ingredient)} id="delete">X</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <select id="dropdown"
                            onChange={this.addIngredients}
                            required>
                            <option value="" disabled selected>
                                Select your ingredients
                            </option>
                            {[...this.state.ingredientsOpts].map(ingredients => (
                                <option key={ingredients} value={ingredients}>{ingredients}</option>
                            ))}
                        </select>
                        <button id="mixbutton" onClick={this.search}>Mix</button>
                        <button id="mixbutton" onClick={this.clear}>Clear</button>
                        {this.state.mixed && this.state.current.length > 0 ? <div id="drinkselect" >
                            <ul id="drinklist" class="horizontal">
                                {this.state.current.map(drink => (
                                    <Link key={drink._id} to={"/account/drinks/id/" + drink._id}>
                                        <li key={drink._id} id="drinkitem">
                                            <div id="drinkinfo">
                                                <div>
                                                    <label id="drinkname">{drink.name}</label>
                                                </div>
                                                <div>
                                                    <label id="drinkingredients">{drink.recipe.ingredients.map(i => i.ingredientName).toString().replace(/,/g, ', ')}</label>
                                                </div>
                                            </div>
                                            <div id="hidden">
                                                <label>Click for the recipe!</label>
                                            </div>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}

