import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

//ModalComponent.prototypes = {
//  title: PropTypes.string.isRequired,
//  content: PropTypes.string.isRequired,
//};

function ModalComponent(props) {

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
        {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <p>{props.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{props.option}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ModalComponent };
