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

        
// {"idDrink":"17217","strDrink":"Vampiro","strDrinkAlternate":null,"strDrinkES":null,"strDrinkDE":null,"strDrinkFR":null,"strDrinkZH-HANS":null,"strDrinkZH-HANT":null,"strTags":"IBA,NewEra","strVideo":null,"strCategory":"Ordinary Drink","strIBA":"New Era Drinks","strAlcoholic":"Alcoholic","strGlass":"Old-Fashioned glass","strInstructions":"Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first \"rim\" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.","strInstructionsES":null,"strInstructionsDE":"Vampiros können in einem hohen Glas oder einem old fashioned Glas zubereitet werden. Der Barkeeper kann das Glas zuerst mit Koscher-Salz \"umsäumen\", indem er eine Schicht Koscher-Salz auf ein Schneidebrett legt, den Glasrand mit Limettensaft oder Wasser anfeuchtet und dann den umgedrehten Glasrand auf das Koscher-Salz legt, so dass das Salz am angefeuchteten Rand haftet. Der zweite Schritt ist, das halbe Glas mit Eis zu füllen und ein oder zwei Schaugläser mit hochwertigem Tequila hinzuzufügen. Im nächsten Schritt werden die Aromastoffe hinzugefügt. Dazu wird eine frische Limette in das Glas gepresst, einige Salzkörner hinzugefügt, zitrusartiges Natron, bis das Glas 4/5 voll ist, und dann würziges Viuda de Sanchez (oder Orangensaft, Limettensaft und pico de gallo) hinzugefügt. Der letzte Schritt ist, die Zutaten so zu rühren, dass die Aromen richtig vermischt werden.","strInstructionsFR":null,"strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg","strIngredient1":"Tequila","strIngredient2":"Tomato Juice","strIngredient3":"Orange Juice","strIngredient4":"Lime Juice","strIngredient5":"Sugar Syrup","strIngredient6":"Salt","strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"6 cl","strMeasure2":"3 cl","strMeasure3":"3 cl","strMeasure4":"1.5 cl","strMeasure5":"1 dash","strMeasure6":"1 pinch","strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2017-09-02 18:44:06"} 


    }catch(e){
      console.log(e)
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
