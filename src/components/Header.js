import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";

class Header extends Component {
  render() {
    return (

      <header className="App-header">
       
        <RegisterLoginModal />
        
      </header>

    );
  }
}

export default Header;
