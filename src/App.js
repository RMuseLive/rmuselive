import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< Updated upstream
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Support from "./components/Support";
import User from "./components/User";
import FAQ from "./components/FAQ";
=======
import Home from "./screens/HomeScreen";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Support from "./screens/Support";
import ProfileScreen from "./screens/ProfileScreen";
import FAQ from "./screens/FAQ";
import Logout from "./components/LogoutButton";
import UserSettingScreen from "./screens/UserSettingScreen";
import Calendar from "./components/calendar";
import agent from "./agent";
import Navbar from "./components/Navbar";
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div className="App">
        {/* <Navbar /> */}
        <Header className="App-header" />
        <Router>
=======
      <Router>
        <div className="App">
          <Navbar />
          <Header className="App-header" history={this.props.history} />
>>>>>>> Stashed changes
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/User" component={User} /> */}
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/support" component={Support} />
              <Route path="/User" component={User} />
              <Route path="/faq" component={FAQ} />
            </Switch>
          </div>
        </Router>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
