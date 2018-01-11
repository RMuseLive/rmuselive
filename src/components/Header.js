import React, { Component } from "react";
import { connect } from "react-redux";
import agent from "../agent.js";

// import RegisterLoginModal from "./RegisterLoginModal";
// import LogoutButton from "./LogoutButton";


import ReactFilestack from "filestack-react";
import { NavLink as Link } from "react-router-dom";
import logo from "../IMGs/logo/rmuse.png";

class Header extends Component {
  render() {

    let authStatus = null;
    agent.Auth.current()
      .then(payload => {
        authStatus = payload;
        console.log(payload);
      })
      .catch(err => console.log(err));


    return (
      <header className="App-header">
        <Link className="navbar-brand" to="/">
          <a href="http://rmuse.live" id="logo">
            <img src={logo} alt="rmuse.live website" id="logo" />
          </a>
        </Link>

        {/* <RegisterLoginModal history={this.props.history} /> */}
        {/* <LogoutButton history={this.props.history} /> */}

      </header>
    );
  }
}

export default Header;
