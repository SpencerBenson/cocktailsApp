import React, { Component } from 'react';
import {
  // Switch,
  // Route,
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'


class NavBar extends Component{
  
  categories_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  search_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
 
  constructor(props){
    super(props)
    this.state = {
      isOpen:false,
      categoriesArray:[]
    }
  }
  setIsOpen(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  // const [isOpen, setIsOpen] = useState(false);

  async fetchCategories(){
    try{

        let response = await axios.get(this.categories_URL )
        .then(res=> res.data.drinks).catch(e => {throw(e)})
        
console.log('response,',response)
      this.setState({   
        categoriesArray: response
          }); 

    }catch(e){
      console.log(e)
    }
  }

 toggle(){
  this.setIsOpen();
 }
 async componentDidMount(){
  await this.fetchCategories()
}

render(){
let categories = this.state.categoriesArray

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={'/logo.png'} alt='logo' height='50px'/>
          </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
         
              <Link to="/" class="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/cocktail" class="nav-link">Submit a Cocktail</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filter By Category
              </DropdownToggle>
              <DropdownMenu right>
              {categories.map((category, index) => (
                  <DropdownItem 
                  key={index}>

                
                  <Link to={'/category/' + category.strCategory.replace(" ", "_")  } class="nav-link">{category.strCategory}</Link>
                </DropdownItem>
                ))}
                <DropdownItem>
                  Sweet Cocktails
                </DropdownItem>
                <DropdownItem>
                  Flavored Cocktails
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Discover
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
      <Form style={{display:'flex'}}>
        <Input style={{marginRight:'10px'}}>Search cocktail</Input>
          <Button color="secondary"  style={{display:'flex'}}><FaSearch style={{position: 'relative', top:'3px',marginRight:'10px', verticalAlign:'middle'}} /> Search</Button>
      </Form>
          </NavbarText>
          
        </Collapse>
      </Navbar>  
    </>
  );
}


}

export default NavBar;
