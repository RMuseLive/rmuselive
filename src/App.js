import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <h1>
          <a
            href=""
            className="typewrite"
            data-period="2000"
            data-type="[ &quot;Hi, Im an Artist.&quot;, &quot;I am Creative.&quot;, &quot;I Love Design.&quot;, &quot;I Love to Develop.&quot;]"
          >
            <span className="wrap" />
          </a>
        </h1>

        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
