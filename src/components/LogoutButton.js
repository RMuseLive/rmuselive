import React, { Component, PropTypes } from "react";
import {Nav, NavDropdown, MenuItem } from "react-bootstrap";
import ReactFilestack from "filestack-react";

import agent from "../agent"

class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }

  handleFilestackSuccess = blob => {
    for (var file of blob.filesUploaded) {
      console.log(agent.token);
      agent.setToken(window.localStorage.getItem("jwt"));
      agent.requests
        .post("/media", {uri: file.url, type: file.mimetype})
        .catch(error => {
          console.log(JSON.stringify(error))
        })
    }
  };

  handleLogOut = () => {
    window.localStorage.setItem("jwt", "");
    window.location = "/";
  };

  render() {
    return (
      <Nav pullRight>
        <NavDropdown title={this.props.user.username}>
          <MenuItem onClick={() => this.handleLogOut()}>Log Out</MenuItem>
          {this.props.user.artist && (
            <ReactFilestack
              apikey={"Av2OyyRf4Q16K5npkOJpBz"}
              buttonText="Upload Files"
              buttonClass="FileStack"
              onSuccess={blob => this.handleFilestackSuccess(blob)}
            />
          )}
        </NavDropdown>
      </Nav>
    );
  }
}

LogoutButton.propTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutButton;
