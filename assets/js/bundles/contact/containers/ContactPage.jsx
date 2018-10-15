import React from 'react';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import ContactForm from '../components/ContactForm';
import { handleContactDataSubmit } from '../actions/ContactFormActions';

export default class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = handleContactDataSubmit;
    }

    render() {
        return (
            <div className="gradient-page contact-page">
                <Header dark={true}/>
                <ContactForm onSubmit={this.handleSubmit}/>
                <Footer/>
            </div>
        )
    }
}
