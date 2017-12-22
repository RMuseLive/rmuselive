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
import LoginForm from "./LoginForm";

// import SignupSettings from"./components/User/Settings/SignupSettings";
// import LoginSettings from "./components/User/Settings/LoginSettings";

class ModalLogin extends React.Component {
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
            <LoginForm />
            <h1>Sign In</h1>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-default" onClick={this.hideModal}>
              Close
            </button>
            
          </ModalFooter>
        </Modal>
        
        <Button onClick={() => this.setState({ isOpen: true })}>
        Log In
      </Button>
      </div>
    );
  }
}
export default ModalLogin;
