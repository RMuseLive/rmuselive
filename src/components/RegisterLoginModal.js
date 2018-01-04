import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";
import button from "react-bootstrap";
import React, { Component } from "react";
import agent from "../agent";

// import SignupSettings from"./components/User/Settings/SignupSettings";
// import LoginSettings from "./components/User/Settings/LoginSettings";

class RegisterLoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      Email: "",
      Password: ""
    };
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
  }
  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  SignUp = event => {
    event.preventDefault();
    agent.Auth
      .register(this.state.Username, this.state.Email, this.state.Password)
      .then(loggedInUser => {
        console.log("Signed-Up");
      })
      .catch(err => {
        console.log(err);
      });
  };

  LogIn = event => {
    event.preventDefault();
    agent.Auth
      .login(this.state.Email, this.state.Password)
      .then(payload => {
        console.log(`look at the unique user heheheh ${payload.username}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  ChangeEmail(e) {
    this.setState({ Email: e.target.value });
  }

  ChangePassword(e) {
    this.setState({ Password: e.target.value });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} style={{ height: 50, width: 200 }}>
          Register/Log-in
        </button>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>Welcome to RmuseLive</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <h1>Sign Up</h1>
            <input type="text" name="Email" onChange={this.ChangeEmail} />
            <input type="text" name="Password" onChange={this.ChangePassword} />
            <button type="button" class="btn btn-dark" onClick={this.SignUp}>
              SignUp
            </button>
            <button type="button" class="btn btn-dark" onClick={this.LogIn}>
              Login
            </button>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}
export default RegisterLoginModal;
