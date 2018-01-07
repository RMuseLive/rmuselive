import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";
import { NavLink as Link } from "react-router-dom";
// import link from "./IMGs/logo/rmuse.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Link className="navbar-brand" to="/">
          <bold>RMUSE.live</bold>
        </Link>

        <RegisterLoginModal />
      </header>
    );
  }
}

export default Header;
