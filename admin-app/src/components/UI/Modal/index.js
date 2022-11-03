import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function NewModal(props) {
  return (
      <Modal size={props.size} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>{props.modaltitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {props.children}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="primary" onClick={props.handleClose}>
                  Save Changes
              </Button>
          </Modal.Footer>
      </Modal>
  )
}
