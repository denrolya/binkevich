import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class PurchaseNotAvailableModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalBody>
                    <h2 id="successModalLabel">Purchase is not available</h2>
                    <p>Please contact us via: <a href={Routing.generate('contact_form')}>Contact Form</a>.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Back Home</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
