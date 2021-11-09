import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Router>
    </div>
  );
}

export default App;
