import React from 'react'

const Cocktail = (props) => {
  return (
    <div class="jumbotron">
    <h1 class="display-3">dfdf</h1>
    {props.drink.map(drink => <p>{drink}</p>)}
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p></p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
    </p>
  </div>
  )
}

export default Cocktail