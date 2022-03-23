import './App.css';
import ProductForm from './components/ProductForm';
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"}>
          <ProductForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
