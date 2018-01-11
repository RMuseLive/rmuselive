import React, { Component, PropTypes } from "react";
import agent from "../agent";
//i believe tis must connect to agent because agent has token

class LogoutButton extends Component {
  handleLogOut = () => {
    window.localStorage.setItem("jwt", "");
    window.location = "/";
  };

  render() {
    return (
      <button onClick={() => this.handleLogOut()}>Log Out</button>
      // <h1 className="loading-text">
      //   Logging out...
      // </h1>
    );
  }
}

LogoutButton.propTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutButton;
