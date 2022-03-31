import { Component } from "react";
import AXIOS from '../../axios.config'

export default class ingredientSearch extends Component {
    constructor(props) {
        super(props)

        this.addIngredients = this.addIngredients.bind(this)
        this.search = this.search.bind(this)
        this.delete = this.delete.bind(this)

        this.state = {
            ingredients: [],
            ingredientsOpts: new Set(),
            drinks: [],
            current: []
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
        console.log("=========SEARCHING========")
        AXIOS.get('/drinks/filter/ingredients', {
            params: { ingredients: this.state.ingredients }

        }).then(res => {
            console.log(res.data)
            this.setState({ current: res.data })
        }).then(console.log(this.state.current))
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

    render() {
        return (

            <div>
                <div>
                    <label>Mix<br></br>Select the ingredients you've got at home,
                        to see what drinks you can make!</label>
                </div>
                <br></br>

                <div>
                    <label>Selected</label>
                    <ul>
                        {this.state.ingredients.map(ingredient => (
                            <li key={ingredient}>
                                <label>{ingredient}</label>
                                <button onClick={() => this.delete(ingredient)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <select onChange={this.addIngredients}>
                        {[...this.state.ingredientsOpts].map(ingredients => (
                            <option key={ingredients} value={ingredients}>{ingredients}</option>
                        ))}
                    </select>
                    {/* {console.log(this.state.ingredients)} */}
                    <button onClick={this.search}>Mix</button>
                    <ul>
                        {this.state.current.map(drink => (
                            <li key={drink._id}>
                                <table>
                                <tbody>
                            <li key={drink.name}>
                                <table>
                                    <tr>
                                        <td>
                                            {drink.name}
                                        </td>
                                        <td>
                                            {drink.tag}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Ingredients : {drink.recipe.ingredients.map(i => i.name).toString().replace(/,/g, ', ')}
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}