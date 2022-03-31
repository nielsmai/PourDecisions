import { Component } from "react";
import AXIOS from '../../axios.config'

export default class ingredientSearch extends Component {
    constructor(props){
        super(props)

        this.addIngredients = this.addIngredients.bind(this)

        this.state={
            ingredients: [],
            ingredientsOpts: new Set(),
            drinks: []
        }
    }

    addIngredients = (e) => this.setState({ingredients: [...this.state.ingredients,e.target.value]})

    componentDidMount(){
        AXIOS.get('/drinks/').then(res => {
            this.setState({drinks : res.data})
        }).then ( () => {
           
           for(let drink of this.state.drinks) 
           {
               let ingredients = drink.recipe.ingredients

               for (let ingredient of ingredients)
               {
                   let temp = this.state.ingredientsOpts.add(ingredient.ingredientName.toLowerCase())
                   this.setState({ingredientsOpts : temp })     
               }
           }
            
        })
        // .then ( () => console.log(this.state.ingredientsOpts))
    }

    render() {
        return (
          <div>
          {console.log(this.state.ingredientsOpts)}
            <select onChange={this.addIngredients}>
                {[...this.state.ingredientsOpts].map(ingredients => (
                    <option key={ingredients} value={ingredients}>{ingredients}</option>
                ))}
            </select>
            <label>
                {this.state.ingredients}
            </label>
          </div>  
        )
    }

}