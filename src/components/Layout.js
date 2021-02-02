import React from 'react'
import NavBar from './NavBar.js'
import {Container, Col, Row} from 'reactstrap'

const Layout =({children}) =>{
  return(
    <>
      <NavBar />
      <Container fluid>

      <Row height='100%'>
        <Col xs="2">
        </Col>
      <Col xs="8">
      <main>{children}</main>
      </Col>
      <Col xs="2">
      </Col>
        </Row>
        </Container>
        </>
  )
}

export default Layout

  
  






