import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";
import button, { Tabs, Tab } from "react-bootstrap";
import React, { Component } from "react";
import agent from "../agent";
// import ProfileScreen from "./screens/ProfileScreen";
//connecting to user agent to login, now user,

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

    const username = this.state.Username;
    const email = this.state.Email;
    const password = this.state.Password;
    const userType = this.state.UserType;

    agent.Auth.register(username, email, password, userType)
      .then(payload => {
        window.location = `/ProfileScreen/${payload.user.username}`;
      })
      .then(
        payload => {
          window.location = `/ProfileScreen/${payload.user.username}`;
          this.props.history.push("/ProfileScreen");
          window.localStorage.setItem("jwt", payload.token);
        }
      )
      .catch(err => {

        if(err.status === 500){
          this.SignUp(event);
        } else {
        console.log("SIGN UP ERROR", err);
      }
      });

};




  LogIn = event => {
    event.preventDefault();
    const email = this.state.Email;
    const password = this.state.Password;

    agent.Auth.login(email, password)
      .then(payload => {
        window.localStorage.setItem("jwt", payload.token);
        window.location = `/ProfileScreen/${payload.user.username}`;
      })
      .catch(err => {
        console.log("LOG IN ERROR TEST", err);
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

  ChangeUserType(e) {
    this.setState({ UserType: e.target.value });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} style={{ height: 40, width: 150 }}>
          Register/Log-in
        </button>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal} />
            <ModalTitle>Welcome to RmuseLive</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Tabs defaultActiveKey={1} id="login-tabs">
              <Tab
                eventKey={1}
                title="Login"
                style={{ display: "flex", flexDirection: "column" }}
              >

                <h1 className="display-4">Login</h1>

                <div>
                  <label htmlFor="Email">Email:</label>
                  <input
                    type="text"
                    name="Email"
                    onChange={event =>
                      this.setState({ Email: event.target.value })
                    }
                  />
                  {/* <input type="text" name="Email" onChange={this.ChangeEmail} /> */}
                </div>
                <div>
                  <label htmlFor="Password">Password:</label>
                  <input
                    type="password"
                    name="Password"
                    onChange={this.ChangePassword}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={event => this.LogIn(event)}
                >
                  Login
                </button>
              </Tab>
              <Tab
                eventKey={2}
                title="Sign Up"
                style={{ display: "flex", flexDirection: "column" }}
              >

                <h1 className="display-4">Sign Up</h1>

                <div>
                  <label htmlFor="Username">Username:</label>
                  <input
                    type="text"
                    name="Username"
                    onChange={event => this.ChangeUsername(event)}
                  />
                </div>
                <div>
                  <label htmlFor="Firstname">First Name:</label>
                  <input
                    type="text"
                    name="Firstname"
                    onChange={event => this.ChangeFirstname(event)}
                  />
                </div>
                <div>
                  <label htmlFor="Lastname">Last Name:</label>
                  <input
                    type="text"
                    name="Lastname"
                    onChange={event => this.ChangeLastname(event)}
                  />
                </div>
                <div>
                  <label htmlFor="Email">Email:</label>
                  <input type="text" name="Email" onChange={this.ChangeEmail} />
                </div>
                <div>
                  <label htmlFor="Password">Password:</label>
                  <input
                    type="password"
                    name="Password"
                    onChange={event => this.ChangePassword(event)}
                  />
                </div>
                <div>

                      
                  <label htmlFor="UserType">User Type</label>
                  
                </div>
                {/* <a href="/"> */}
                <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Artist</label>
  </div>

                  <button
                    type="submit"
                    className="btn btn-dark"
                    onClick={event => this.SignUp(event)}
                  >
                    SignUp
                  </button>

                {/* </a> */}

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
