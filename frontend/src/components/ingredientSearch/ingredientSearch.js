import { Component } from "react";
import AXIOS from '../../axios.config'

export default class ingredientSearch extends Component {
    constructor(props){
        super(props)

        this.addIngredients = this.addIngredients.bind(this)

        this.state={
            ingredients: new Set(),
            drinks: []
        }
    }

    addIngredients = (e) => this.setState([this.state.ingredients,e.target.value])

    componentDidMount(){
        AXIOS.get('/drinks/').then(res => {
            this.setState({drinks : res.data})
        })
        console.log(this.state.drinks)
        this.setState({ingredients : new Set(this.state.drinks.map(drink => drink.recipe.ingredients))})
        console.log(this.state.ingredients)
    }

    render() {
        return (
          <div>
            <select onChange={this.addIngredients}>
                {[this.state.ingredients].map(ingredients => (
                    <option key={ingredients.name} value={ingredients.name}>{ingredients.name}</option>
                ))}
            </select>

          </div>  
        )
    }

}