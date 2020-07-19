import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

ModalComponent.prototypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      func: PropTypes.func,
    })
  ).isRequired,
};

const buttonActionItems = (props) => {
  return props.actionitems.map((item, index) => (
    <Button key={index} onClick={item.func} variant="secondary">
      {item.name}
    </Button>
  ));
};

function ModalComponent(props) {

  const { title, content} = props;
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer> {buttonActionItems(props)}</Modal.Footer>
    </Modal>
  );
}

export { ModalComponent };
