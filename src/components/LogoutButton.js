import React, { Component, PropTypes } from "react";
import agent from "../agent";
//i believe tis must connect to agent because agent has token

class Logout extends Component {
  handleLogOut = () => {
    agent.deleteToken();
    this.props.router.push("/");
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

Logout.propTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
