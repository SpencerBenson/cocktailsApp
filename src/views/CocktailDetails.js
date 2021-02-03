import React, {Component} from 'react'
// import {Row, Col} from 'reactstrap'
import axios from 'axios'
require('dotenv').config()

class CocktailDetails extends Component {
  

  constructor(props){
    super(props)
    this.state = {
      idDrink:'',
      strDrink:'',
      strTags:'',
      strCategory:'',
      strIBA:'',
      strAlcoholic:'',
      strGlass:'',
      strInstructions:'',
      strDrinkThumb:'',
      strIngredient1:'',
      strIngredient2:'',
      strIngredient3:'',
      strIngredient4:'',
      strIngredient5:'',
      strIngredient6:'',
      strIngredient7:'',
      strIngredient8:'',
      strIngredient9:'',
      strIngredient10:'',
      strIngredient11:'',
      strIngredient12:'',
      strIngredient13:'',
      strIngredient14:'',
      strIngredient15:'',
      strMeasure1:'',
      strMeasure2:'',
      strMeasure3:'',
      strMeasure4:'',
      strMeasure5:'',
      strMeasure6:'',
      strMeasure7:'',
      strMeasure8:'',
      strMeasure9:'',
      strMeasure10:'',
      strMeasure11:'',
      strMeasure12:'',
      strMeasure13:'',
      strMeasure14:'',
      strMeasure15:'',
      dateModified:''
    }
  }
  
  async fetchCocktail(){
    try{
        const cocktailId = this.props.match.params.cocktailId
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}` )
        .then(res=>res.data.drinks[0] )
        .catch(e => {throw(e)});

        // this.drinkDetails = response
        this.setState({
          idDrink:response.idDrink,
          strDrink:response.strDrink,
          strTags:response.strTags,
          strCategory:response.strCategory,
          strIBA:response.strIBA,
          strAlcoholic:response.strAlcoholic,
          strGlass:response.strGlass,
          strInstructions:response.strInstructions,
          strDrinkThumb:response.strDrinkThumb,
          strIngredient1:response.strIngredient1,
          strIngredient2:response.strIngredient2,
          strIngredient3:response.strIngredient3,
          strIngredient4:response.strIngredient4,
          strIngredient5:response.strIngredient5,
          strIngredient6:response.strIngredient6,
          strIngredient7:response.strIngredient7,
          strIngredient8:response.strIngredient8,
          strIngredient9:response.strIngredient9,
          strIngredient10:response.strIngredient10,
          strIngredient11:response.strIngredient11,
          strIngredient12:response.strIngredient12,
          strIngredient13:response.strIngredient13,
          strIngredient14:response.strIngredient14,
          strIngredient15:response.strIngredient15,
          strMeasure1:response.strMeasure1,
          strMeasure2:response.strMeasure2,
          strMeasure3:response.strMeasure3,
          strMeasure4:response.strMeasure4,
          strMeasure5:response.strMeasure5,
          strMeasure6:response.strMeasure6,
          strMeasure7:response.strMeasure7,
          strMeasure8:response.strMeasure8,
          strMeasure9:response.strMeasure9,
          strMeasure10:response.strMeasure10,
          strMeasure11:response.strMeasure11,
          strMeasure12:response.strMeasure12,
          strMeasure13:response.strMeasure13,
          strMeasure14:response.strMeasure14,
          strMeasure15:response.strMeasure15,
          dateModified:response.dateModified
        })
        
        console.log('state.drink ',this.state.strDrink);


    }catch(e){
      // console.log(e)
      throw (e)
    }
  }
  async componentDidMount(){
    await this.fetchCocktail()
  }




render(){
  let cocktail = this.state 
  let ingredients = []
  
  for(let i=1;i<=15;i++){
    const measure = `strMeasure${i}` 
    const ingredient = `strIngredient${i}` 
    
    const strMeasure = cocktail[measure]
    const strIngredient = cocktail[ingredient]
    if(strIngredient !=null){
    ingredients.push(<li key={ingredient+i}>{") " + strMeasure +" "+ strIngredient }</li> ) 
    }
  }
  // const drink = Object.keys(this.drinkDetails).map((key) => [Number(key), this.drinkDetails[key]]);
  return(
    <div style={{marginTop:'20px'}} class="jumbotron" key={cocktail.idDrink}>
  <h1 class="display-3">{cocktail.strDrink}</h1>
  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{maxWidth:'500px'}} />
  <h2 class="display-3">Instructions</h2>
  <p class="lead">{cocktail.strInstructions}</p>
  <h3>Ingredients </h3>
  <ol>
    {ingredients}
  </ol>
  <hr class="my-4" />
  <p><b>Tags: </b>{cocktail.strTags} </p>
  
</div>
  )
}
 
}

export default CocktailDetails
