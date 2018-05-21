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

                {/* TODO: Refactor */}
                <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-content">
                            <h2 id="successModalLabel">
                                Your message
                                has been sent
                            </h2>
                            <p>We’ll be in touch as soon as possible.</p>
                            <button type="button" class="btn">back home</button>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}