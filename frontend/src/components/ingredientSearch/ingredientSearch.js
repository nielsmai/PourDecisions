import { Axios } from "axios";
import { Component } from "react";
import AXIOS from '../../axios.config'

export default class ingredientSearch extends Component {
    constructor(props){
        super(props)

        this.addIngredients = this.addIngredients.bind(this)

        this.state={
            ingredients: [],
            drinks: []
        }
    }

    addIngredients = (e) => this.setState([this.state.ingredients,e])


    componentDidMount(){
        AXIOS.get('/drinks/').then(res => {
            this.setState({drinks : res.data})
        })
    }

    render() {
        return (
          <div>
          </div>  
        )
    }

}