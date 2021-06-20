import React from "react";
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderComponent from "./Containers/Header";
import ProductComponent from "./Containers/ProductComponent";
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";
import "./styles.css";
function App() {
  return (
    <Router>
      <HeaderComponent />
      <div>
        <Switch>
          {/* <h2 style={{ marginTop: "6rem" }}>Hi</h2> */}
          <Route exact path="/" render={() => <ProductListing />} />
          <Route exact path="/pd" render={() => <ProductDetails />} />
          <Route exact path="/pc" render={() => <ProductComponent />} />
          <Redirect to="/" />
          {/* <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route exact path="/pc" component={ProductComponent} /> */}
          {/* <Route>404 not found</Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
