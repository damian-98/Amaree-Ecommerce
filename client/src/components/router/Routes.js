import React from "react";
import Home from "../Home";
import Shop from "../Shop";
import Contact from "../Contact";
import About from "../About";
import Cart from "../Cart";
import Success from "../SuccessPage";
import Cancel from "../CancelPage";
import NotFound from "../NotFound";
import { Route, Switch } from "react-router-dom";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/cancel">
          <Cancel />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
