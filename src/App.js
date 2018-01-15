import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/HomeScreen";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Support from "./screens/Support";
import ProfileScreen from "./screens/ProfileScreen";
import FAQ from "./screens/FAQ";
import Logout from "./components/LogoutButton";
import UserSettingScreen from "./screens/UserSettingScreen";
import Calendar from "./components/calendar";



class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Header className="App-header" history={this.props.history} />

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/support" component={Support} />
              <Route path="/faq" component={FAQ} />
              <Route path="/UserSettingScreen" component={UserSettingScreen} />
              <Route path="/logout" component={Logout} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/:username" component={ProfileScreen} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
