import React, {Component} from 'react';
import Header from '../../common/Containers/Header';
import Footer from '../../common/Components/Footer';
import ContactForm from './ContactForm.jsx';

export default class Layout extends Component {

    render() {
        return (
            <div className="gradient-page">
                <Header/>
                <ContactForm/>
                <Footer/>
            </div>
        )
    }
}