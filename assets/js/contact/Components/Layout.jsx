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

                {/* TODO: Refactor */}
                <div className="modal fade" id="successModal" tabIndex="-1" role="dialog"
                     aria-labelledby="successModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-content">
                            <h2 id="successModalLabel">Your message has been sent</h2>
                            <p>We’ll be in touch as soon as possible.</p>
                            <button type="button" className="btn">back home</button>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}