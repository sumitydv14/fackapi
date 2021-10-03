
import logo from './logo.svg';

import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing.jsx';
import ProductDetails from './containers/ProductDetails.jsx';
import Header from './containers/Header';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/> 
         <Switch>
        <Route  exact path="/"  component={ProductListing} />
     
        <Route exact path="/product/:productId" component={ProductDetails}/>
        <Route exact path="*" >404 page</Route>
        </Switch>
      </Router>
         
    </div>
  );
}

export default App;
