import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./main/Schedule/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
