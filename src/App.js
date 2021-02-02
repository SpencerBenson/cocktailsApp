// import Layout from './components/Layout.js'
// import NavBar from "./components/NavBar";
import HomePage from "./views/Home";
import NewCocktail from "./views/NewCocktail";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout'
import CocktailDetails from "./views/CocktailDetails";
import FilterByCategory from "./views/FilterByCategory";
function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/" component={HomePage} exact />
          <Route path="/category/:categoryId" component={FilterByCategory} />
          <Route path="/cocktail/:cocktailId" component={CocktailDetails} />
          <Route path="/cocktail" exact component={NewCocktail} />
        </Layout>
      </Switch>
    </>
  );
}

export default App;
