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

class MyModal extends React.Component {
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
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <LoginForm />
            <h1>PUT YOUR FORM HERE</h1>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-default" onClick={this.hideModal}>
              Close
            </button>
            <button className="btn btn-primary">Save changes</button>
          </ModalFooter>
        </Modal>
        <Button onClick={() => this.setState({ isOpen: true })}>
          OPEN Modal
        </Button>
      </div>
    );
  }
}
export default MyModal;
