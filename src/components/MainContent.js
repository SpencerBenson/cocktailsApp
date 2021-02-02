import React from 'react';
import CocktailCard from './CocktailCard';
import {Row, Col} from 'reactstrap';


const Content = (props) => {
  return(
    <div className="container fluid">
       <Row>
       <Col xs="4">
        <CocktailCard />
          </Col>
          <Col xs="4">
        <CocktailCard />
          </Col>
          <Col xs="4">
        <CocktailCard />
          </Col>
          </Row><Row>
       <Col xs="4">
        <CocktailCard />
          </Col>
          <Col xs="4">
        <CocktailCard />
          </Col>
          <Col xs="4">
        <CocktailCard />
          </Col>
          </Row>
          </div>
  )
}

export default Content

