import './App.css';
import ProductForm from './components/ProductForm';
import ProductView from './components/ProductView';
import {Switch, Route, Redirect} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/products"}/>
        </Route>
        <Route exact path={"/products"}>
          <ProductForm/>
        </Route>
        <Route exact path={"/products/:id"}>
          <ProductView/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
