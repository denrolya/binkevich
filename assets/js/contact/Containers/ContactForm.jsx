import React, {Component} from 'react';
import ContactFormComponent from '../Components/ContactFormComponent.jsx';

const attach = require('../../../img/attach-file-icon.png');

export default class ContactForm extends Component {

    handleSubmit(data) {
        console.log("data", data)
    }

    render() {
        return (
            <div>
                <ContactFormComponent onSubmit={this.handleSubmit}></ContactFormComponent>
            </div>
        )
    }
}