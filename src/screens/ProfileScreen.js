import React, { Component } from "react";
import { connect } from "react-redux";
// import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";


//filestack button moved from header
class ProfileScreen extends Component {
  render() {
    return (
      <header className="Header">
      <div>
      <text>User Page</text>
    </div>
    
        <ReactFilestack
          apikey={"Av2OyyRf4Q16K5npkOJpBz"}
          buttonText="FileStack Open"
          buttonClass="FileStack"
          // options={options}
          onSuccess={this.yourCallbackFunction}
        />
      </header>
    );
  }
}

export default ProfileScreen;