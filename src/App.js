import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <Header className="App-header" />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/User" component={User}/>
            </Switch>
          </div>
        </Router>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
