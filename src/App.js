import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
// import User from "./components/User";
//import Navbar from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Support from "./components/Support";
=======
import User from "./components/User";
import FAQ from "./components/FAQ";
>>>>>>> 91f14ffb8e5340e60df94ee33efafdaf5def8aeb

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Header className="App-header" />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
<<<<<<< HEAD
              {/* <Route path="/User" component={User} /> */}
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/support" component={Support} />
=======
              <Route path="/User" component={User}/>
              <Route path="/faq" component={FAQ}/>
>>>>>>> 91f14ffb8e5340e60df94ee33efafdaf5def8aeb
            </Switch>
          </div>
        </Router>
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
