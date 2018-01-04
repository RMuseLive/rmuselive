import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
  } from "react-modal-bootstrap";
  import { Button } from "react-bootstrap";
  import React from "react";
  import SignupForm from "./SignupForm"
//   import SignupSettings from "./User/Settings/SignupSettings";
  
  // import SignupSettings from"./components/User/Settings/SignupSettings";
  // import LoginSettings from "./components/User/Settings/LoginSettings";
  
  class ModalSignup extends React.Component {
    state = {
      isOpen: false
    };
  
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
  
    render() {
      return (
        <div>
          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
            <ModalHeader>
              <ModalClose onClick={this.hideModal} />
              <ModalTitle>Welcome to RmuseLive</ModalTitle>
            </ModalHeader>
            <ModalBody>
              {/* <SignupSettings /> */}
              <SignupForm />
              <h1>Sign In</h1>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-default" onClick={this.hideModal}>
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </ModalFooter>
          </Modal>
          
          <Button onClick={() => this.setState({ isOpen: true })}>
          Sign Up
        </Button>
        </div>
      );
    }
  }
  export default ModalSignup;
  