import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
