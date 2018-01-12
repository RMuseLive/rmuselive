import React, { Component, PropTypes } from "react";
import {Nav, NavDropdown, MenuItem } from "react-bootstrap";

class LogoutButton extends Component {
  constructor(props) {
    super(props)
  }


  handleLogOut = () => {
    window.localStorage.setItem("jwt", "");
    window.location = "/";
  };

  render() {
    return (
      <Nav pullRight>
        <NavDropdown title={this.state.username}>
          <MenuItem onClick={() => this.handleLogOut()}>Log Out</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

LogoutButton.propTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutButton;
