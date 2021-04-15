import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const ErrorModal = ({ handleClose, show, heading, errror }: { heading: string, errror: string, handleClose: VoidFunction, show: boolean }) => {
    return <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errror}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ErrorModal;