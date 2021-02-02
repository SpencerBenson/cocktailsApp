import React from 'react';

import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  CardLink,Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

// import image from '/assets/318x180.svg'

const CocktailCard = (props) => {
  const drinkDetails = {...props.drink}
  const path = `/cocktail/${drinkDetails.idDrink}`
  const instructions = drinkDetails.strInstructions
  const length = 57;
  const intro = instructions.substring(0, length)+'...';
  return (
    <Col xs='4' key={drinkDetails.idDrink}>
      <Card className="cocktail-card" >
        <CardImg top width="100%" src={drinkDetails.strDrinkThumb} alt="Card image cap" />
        <CardBody>
  <CardTitle tag="h5">{drinkDetails.strDrink}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{drinkDetails.strAlcoholic}</CardSubtitle>
          <CardText>{drinkDetails.strAlcoholic} {intro}.</CardText>
          <Link to={path}>
          <Button className='btn btn-primary btn-lg'>Read More</Button>
          </Link>
        </CardBody>
      </Card>
      </Col>
  );
};

export default CocktailCard;
Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};



CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};


CardLink.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
