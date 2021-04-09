import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="appDiv">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
