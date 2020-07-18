import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//interface IModalProps {
//  title?: string;
//  content?: string;
//  onHide?: any;
//}

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <p>{this.props.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="secondary">Close</Button>
          <Button onClick={this.props.retry} variant="secondary">Retry</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { ModalComponent };
