import React, {Component} from 'react';
import Header from '../../common/Containers/HeaderContainer';
import ContactForm from '../Components/ContactForm.jsx';
import Footer from '../../common/Components/Footer';
import { handleContactDataSubmit } from '../Actions/ContactFormActions';

export default class Layout extends Component {

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