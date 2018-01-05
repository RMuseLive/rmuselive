import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterLoginModal from "./RegisterLoginModal";
import ReactFilestack from "filestack-react";

class Header extends Component {
  render() {
    return (
      // <Header className="Header">
      //   <text>Welcome</text>
      <div>  <RegisterLoginModal /></div>
      
        // <ReactFilestack
        //   apikey={"Av2OyyRf4Q16K5npkOJpBz"}
        //   buttonText="FileStack Open"
        //   buttonClass="FileStack"
        //   // options={options}
        //   onSuccess={this.yourCallbackFunction}
        // />
    //   </Header>
    );
  }
}

export default Header;
