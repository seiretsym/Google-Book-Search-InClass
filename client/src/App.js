import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./components/Card";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="saved/:id" component={View} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
