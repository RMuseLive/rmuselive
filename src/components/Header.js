import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";
import { NavLink as Link } from "react-router-dom";
import logo from "../IMGs/logo/rmuse.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Link className="navbar-brand" to="/">
          <a href="http://rmuse.live"
          id="logo">
            <img src={logo} alt="rmuse.live website"  id="logo"/>
          </a>
        </Link>
        <RegisterLoginModal />
      </header>
    );
  }
}

export default Header;
