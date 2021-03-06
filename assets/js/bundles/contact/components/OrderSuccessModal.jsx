import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class OrderSuccessModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalBody>
                    <h2 id="successModalLabel">Your message has been sent</h2>
                    <p>We’ll be in touch as soon as possible.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Back Home</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
