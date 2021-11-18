import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Router>
    </div>
  );
}

export default App;
