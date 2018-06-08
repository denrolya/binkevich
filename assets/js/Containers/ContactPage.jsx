import React from 'react';
import Header from '../Components/Header';
import ContactForm from '../Components/ContactForm.jsx';
import Footer from '../Components/Footer';
import { handleContactDataSubmit } from '../Actions/ContactFormActions';

export default class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = handleContactDataSubmit;
    }

    render() {
        return (
            <div className="gradient-page">
                <Header dark={false}/>
                <ContactForm onSubmit={this.handleSubmit}/>
                <Footer/>
            </div>
        )
    }
}