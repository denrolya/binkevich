import React, {Component} from 'react';
import ContactFormComponent from '../Components/ContactFormComponent.jsx';
import axios from 'axios';

const attach = require('../../../img/attach-file-icon.png');

export default class ContactForm extends Component {

    handleSubmit(data) {
        const formData = new FormData();

        formData.append('order.name', data.order.name);
        formData.append('order.email', data.order.email);
        formData.append('order.phonenumber', data.order.phonenumber);
        formData.append('order.comments', data.order.comments);
        if (data.order.file) {
            // formData.append('file', data.file, data.file.name);
            formData.append('order.file', data.order.file);
        }
        console.log("formatData " + formData.get('order.name'))
        console.log("data " + data.order.name)

        axios.post('/api/v1/order', formData)
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