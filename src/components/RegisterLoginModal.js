import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { Nav, NavItem, Tabs, Tab, Grid, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import agent from "../agent";

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
    this.ChangeUserType = this.ChangeUserType.bind(this);
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

    const firstname = this.state.Firstname;
    const lastname = this.state.Lastname;
    const username = this.state.Username;
    const email = this.state.Email;
    const password = this.state.Password;
    const artist = this.state.artist;

    agent.Auth.register(username, email, firstname, lastname, password, artist)
      .then(payload => {
        window.location = `/ProfileScreen/${payload.user.username}`;
      })
      .then(
        payload => {
          window.localStorage.setItem("jwt", payload.token);
          window.location = `/ProfileScreen/${payload.user.username}`;
          this.props.history.push("/ProfileScreen");
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
        window.location = `/${payload.user.username}`;
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
    this.setState({ Artist: e.target.value });
  }

  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem onClick={this.openModal} style={{ verticalAlign: "middle"}}>
            Login/Sign Up
          </NavItem>
        </Nav>
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
              >
                <Grid>
                  <Row></Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Email">Email:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="text"
                        name="Email"
                        onChange={event =>
                          this.setState({ Email: event.target.value })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Password">Password:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="password"
                        name="Password"
                        onChange={this.ChangePassword}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={event => this.LogIn(event)}
                      >
                        Login
                      </button>
                    </Col>
                  </Row>
                </Grid>
              </Tab>
              <Tab
                eventKey={2}
                title="Sign Up"
              >
                <Grid>
                  <Row></Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Username">Username:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="text"
                        name="Username"
                        onChange={event => this.ChangeUsername(event)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Firstname">First Name:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="text"
                        name="Firstname"
                        onChange={event => this.ChangeFirstname(event)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Lastname">Last Name:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="text"
                        name="Lastname"
                        onChange={event => this.ChangeLastname(event)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Email">Email:</label>
                    </Col>
                    <Col md={2}>
                      <input type="text" name="Email" onChange={this.ChangeEmail} />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="Password">Password:</label>
                    </Col>
                    <Col md={2}>
                      <input
                        type="password"
                        name="Password"
                        onChange={event => this.ChangePassword(event)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <label className="form" htmlFor="artist">I am an artist.</label>
                    </Col>
                    <Col md={2}>
                      <input type="checkbox" name="artist" onChange={event => this.ChangeUserType(event)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={event => this.SignUp(event)}
                      >
                        SignUp
                      </button>
                    </Col>
                  </Row>
                </Grid>
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
