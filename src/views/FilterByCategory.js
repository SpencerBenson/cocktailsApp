import React, {Component} from 'react'

import {Row} from 'reactstrap'
import CocktailCategoryCard from '../components/CocktailCategoryCard'
import axios from 'axios'
require('dotenv').config()
class FilterByCategory extends Component {
  
  category_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='
 
  constructor(props){
    super(props)
    this.state = {
      drinksDetails : []
    }

  }

  async fetchCocktails(){
    try{
        const categoryId = this.props.match.params.categoryId
        const categ = `${this.category_URL}${categoryId}`
        const category = categoryId.replace('_', ' ')
        const response = await axios.get(categ)
        .then(res=>res.data.drinks ).catch(e => {throw(e)});
        // this.drinks.add(response)
        
        console.log('categoryId: ',categoryId);
        console.log('category: ',category);


        this.setState({   
        drinksDetails: response,
        category
          });  

    }catch(e){
      console.log(e)
    }
  }
  async componentDidMount(){
    await this.fetchCocktails()
  }
render(){
  const drinks = this.state.drinksDetails
  const cocktailCategory = this.state.category
  return(
    <>
    <Row style={{marginTop:'20px'}}>
    <h1>{cocktailCategory} </h1>
    </Row>
    <Row className='cards-container'>
        {drinks.map((drink, index) => (
          <CocktailCategoryCard 
          key={index} 
          drink = {drink}
          />

        ))}
    </Row>
    </>
  )
}
 
}

export default FilterByCategory