import React, {Component} from 'react';
import ContactFormComponent from '../Components/ContactFormComponent.jsx';
import axios from 'axios';

const attach = require('../../../img/attach-file-icon.png');

export default class ContactForm extends Component {

    handleSubmit(data) {
        axios.post('/api/v1/order', data)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    render() {
        return (
            <div>
                <ContactFormComponent onSubmit={this.handleSubmit}></ContactFormComponent>
            </div>
        )
    }
}