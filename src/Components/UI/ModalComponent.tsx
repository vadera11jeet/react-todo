import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalComponentProps} from "../../Interfaces/Interfaces"



const ModalComponent = ({ show, modalCloseHandler, children, modalSubmitHandler, title, closeButtonText, submitButtonText }: ModalComponentProps) => {
  return (
    <Modal show={show} onHide={modalCloseHandler} >
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={modalCloseHandler}>
        {closeButtonText}
      </Button>
      <Button variant="primary" onClick={modalSubmitHandler}>
        {submitButtonText}
      </Button>
    </Modal.Footer>
  </Modal>
  );
};


export default ModalComponent;
