import React, {Component} from 'react'

import {Row} from 'reactstrap'
import CocktailCard from '../components/CocktailCard'
import axios from 'axios'
require('dotenv').config()
class HomePage extends Component {
  randomDrinks_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  drinks = new Set()
  constructor(props){
    super(props)

    this.state = {
      drinksArray : []
    }

  }

  async fetchDrinks(){
    try{
      for (let i = 0;i<9;i++){

        const response = await axios.get(this.randomDrinks_URL )
        .then(res=> res.data.drinks[0]).catch(e => {throw(e)})
        this.drinks.add(response)
        
      }

      this.setState({   
        drinksArray: Array.from(this.drinks)
          }); 

    }catch(e){
      console.log(e)
    }
  }
  async componentDidMount(){
    await this.fetchDrinks()
  }




render(){
  const drinks = this.state.drinksArray
  return(
    <Row className='cards-container'>
      
        {drinks.map((drink, index) => (
          <CocktailCard 
          key={index} 
          drink = {drink}
          />

        ))}
    </Row>
  )
}
 
}

export default HomePage