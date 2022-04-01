import { Component } from "react";
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

        let temp = [...this.state.ingredientsOpts]

        if (temp.length === 1) temp = []

        else temp.splice(temp.indexOf(e.target.value), 1)

        this.setState({ ingredientsOpts: new Set(temp) })

    }

    componentDidMount() {
        AXIOS.get('/drinks/').then(res => {
            this.setState({ drinks: res.data })
        }).then(() => {

            for (let drink of this.state.drinks) {
                let ingredients = drink.recipe.ingredients

                for (let ingredient of ingredients) {
                    let temp = this.state.ingredientsOpts.add(ingredient.ingredientName)
                    this.setState({ ingredientsOpts: temp })
                }
            }

        })
    }
    search() {
        AXIOS.get('/drinks/filter/ingredients', {
            params: { ingredients: this.state.ingredients }

        }).then(res => {
            console.log(res.data)
            this.setState({ current: res.data })
        }).then(this.toggleMixed)
    }

    delete = (name) => {
        let temp = [...this.state.ingredients]

        if (temp.length === 1) temp = []

        else temp.splice(temp.indexOf(name), 1)

        this.setState({ ingredients: temp })

        let replenish = [...this.state.ingredientsOpts]

        replenish.push(name)

        this.setState({ ingredientsOpts: new Set(replenish) })
    }

    clear = () => {
        let temp = [...this.state.ingredientsOpts, ...this.state.ingredients]
        this.setState({ ingredientsOpts: new Set(temp) })
        this.setState({ ingredients: [] })
        if (this.state.mixed) this.setState({ mixed: !this.state.mixed })
    }

    toggleMixed = () => this.setState({ mixed: !this.state.mixed })

    render() {
        return (

            <div>
                <div id="mainblock">
                    <div>
                        <p id="mainblockPrompt" class="w">
                            Mix
                            <br></br>
                            Select the ingredients you've got at home, to see what drinks you can make!
                        </p>
                    </div>
                    <div id="subblock">
                        <label id="mainblockTitle">Selected</label>
                        <div id="selection">
                            <div id="selectionlist">
                                <ul class="horizontal">
                                    {this.state.ingredients.map(ingredient => (
                                        <li key={ingredient} id="lingredient">
                                            <label id="ingOptName">{ingredient}</label>
                                            <button onClick={() => this.delete(ingredient)} id="delete">X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <select id="dropdown"
                            onChange={this.addIngredients}>
                            <option value="" disabled selected hidden>
                                Select your ingredients
                            </option>
                            {[...this.state.ingredientsOpts].map(ingredients => (
                                <option key={ingredients} value={ingredients}>{ingredients}</option>
                            ))}
                        </select>
                        <button id="mixbutton" onClick={this.search}>Mix</button>
                        <button id="mixbutton" onClick={this.clear}>Clear</button>
                        {this.state.mixed ? <div id="drinkselect" >
                            <ul id="drinklist" class="horizontal">
                                {this.state.current.map(drink => (
                                    <li key={drink._id}>
                                        <div>
                                            <label id="drinkname">{drink.name}</label>
                                        </div>
                                        <div>
                                            <label id="drinkingredients">{drink.recipe.ingredients.map(i => i.ingredientName).toString().replace(/,/g, ', ')}</label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}