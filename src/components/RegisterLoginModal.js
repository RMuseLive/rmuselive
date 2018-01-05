import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";
import button, {Tabs, Tab} from "react-bootstrap";
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
    this.ChangeFirstname = this.ChangeFirstname.bind(this);
    this.ChangeLastname = this.ChangeLastname.bind(this);
    this.ChangeUsername = this.ChangeUsername.bind(this);
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
        console.log(`look at the unique user heheheh ${payload.username}`
      );
      
      })
      .catch(err => {
        console.log(err);
      });
  };

  ChangeFirstname(e) {
    this.setState({ Firstname: e.target.value });
  }

  ChangeLastname(e) {
    this.setState({ Lastname: e.target.value });
  }

  ChangeUsername(e) {
    this.setState({ Username: e.target.value });
  }

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
            <Tabs defaultActiveKey={1} id="login-tabs">
              <Tab eventKey={1} title="Login" style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Login</h1>
                <div>
                  <label for="Email">Email:</label>
                  <input type="text" name="Email" onChange={this.ChangeEmail} />
                </div>
                <div>
                  <label for="Password">Password:</label>
                  <input type="password" name="Password" onChange={this.ChangePassword} />
                </div>
               <a href= "ProfileScreen"> <button type="button" class="btn btn-dark" onClick={this.Login}>
                  Login
                </button></a>
              </Tab>
              <Tab eventKey={2} title="Sign Up" style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Sign Up</h1>
                <div>
                  <label for="Username">Username:</label>
                  <input type="text" name="Firstname" onChange={this.ChangeFirstname} />
                </div>
                <div>
                  <label for="Firstname">First Name:</label>
                  <input type="text" name="Lastname" onChange={this.ChangeLastname} />
                </div>
                <div>
                  <label for="Lastname">Last Name:</label>
                  <input type="text" name="Username" onChange={this.ChangeUsername} />
                </div>
                <div>
                  <label for="Email">Email:</label>
                  <input type="text" name="Email" onChange={this.ChangeEmail} />
                </div>
                <div>
                  <label for="Password">Password:</label>
                  <input type="password" name="Password" onChange={this.ChangePassword} />
                </div>
                <button type="button" class="btn btn-dark" onClick={this.SignUp}>
                  SignUp
                </button>
              </Tab>
            </Tabs>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    );
  }
}
export default RegisterLoginModal;
