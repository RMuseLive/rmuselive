import React, { Component } from "react";
import agent from "../agent.js";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

import RegisterLoginModal from "./RegisterLoginModal";
import LogoutButton from "./LogoutButton";

import logo from "../IMGs/logo/rmuse.png";

const LoginOut = () => {
  const token = window.localStorage.getItem("jwt");
  if (token) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return <LogoutButton user={user}/>;
  } else {
    return <RegisterLoginModal/>;
  }
};

class Header extends Component {
  render() {

    return (
      <div style={{ backgroundColor: "#dde7e9" }}>
        <a href="/"><img className="logo" src={logo} alt="RMuse.Live"/></a>
        <Navbar style={{ backgroundColor: "#7b9fa6" }}>
          <Nav>
            <NavItem href="/calendar">Events</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <LoginOut/>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
