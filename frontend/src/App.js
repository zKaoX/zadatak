import './App.css';
import {Switch, Route, NavLink} from "react-router-dom";

import OrdersCounter from "./connected_components/OrdersCounter";
import Home from "./connected_components/Home";
import UserCheckout from "./connected_components/UserCheckout";
import OrderHistory from "./connected_components/OrderHistory"


const shoes_store_url = 'http://127.0.0.1:8000';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to={"/"} exact activeClassName='active'>Home</NavLink>
          <NavLink to={"/usercheckout"} exact activeClassName='active'>User checkout</NavLink>
          <NavLink to={"/orderhistory"} exact activeClassName='active'>Order history</NavLink>
        </nav>
        <OrdersCounter />
      </header>
      <main>
        <Switch>
          <Route exact path={"/"}> 
            <Home url={shoes_store_url} />
          </Route>
          <Route exact path={"/usercheckout"}>
            <UserCheckout url={shoes_store_url} />
          </Route>
          <Route exact path={"/orderhistory"} component={OrderHistory}/>
          <Route path={"/"} component={() => <h1>404 - Not Found</h1>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;