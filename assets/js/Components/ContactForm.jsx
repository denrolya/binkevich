import React from 'react';
import Files from 'react-files';
import OrderSuccessModal from './OrderSuccessModal';
import {getInitialFormState} from '../Actions/ContactFormActions';

const attachIcon = require('../../img/attach-file-icon.png');

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = getInitialFormState();

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleFileError = this.handleFileError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSuccessModal = this.toggleSuccessModal.bind(this);
    }

    handleFileError(error) {
        if (error.code === 1) {
            alert("The file you've attached is not a zip archive! Please attach another file or submit your order without it.");
        }
    }

    toggleSuccessModal() {
        this.setState({
            isSuccessModalOpen: !this.state.isSuccessModalOpen
        });
    }

    handleFieldChange(propertyName, event) {
        event.persist(); // In order to use event.target inside of setState
        this.setState((prevState) => {
            prevState.order[propertyName] = event.target.value;
            return prevState;
        });
    }

    handleFileChange(files) {
        if (!files) { return; }

        this.setState((prevState) => {
            prevState.order.file = files[0];
            return prevState;
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isSubmitInProgress: true
        });

        this.props
            .onSubmit(this.state.order)
            .then(res => {
                this.setState(getInitialFormState());
                this.toggleSuccessModal();
            });
    }

    render() {
        return (<section className="contact-form">
            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 custom-pad">
                        <h2>CONTACT</h2>
                        <p>
                            If you’re interested in our collections or require our bespoke services
                            bringing your ideas to life, please do not hesitate to message
                            us and we will get back to you as soon as possible.
                        </p>
                    </div>
                </div>
                <form className="row" method="post" onSubmit={ this.handleSubmit }>
                    <div className="col-12 col-xl-6 custom-pad__l d-flex flex-wrap">
                        <label>
                            NAME *
                            <input
                                type="text" name="name" required
                                value={ this.state.order.name }
                                onChange={ (e) => this.handleFieldChange('name', e) }
                            />
                        </label>
                        <label>
                            EMAIL *
                            <input type="email" name="email" required
                                   value={ this.state.order.email }
                                   onChange={ (e) => this.handleFieldChange('email', e) }
                            />
                        </label>
                        <label>
                            PHONE NUMBER *
                            <input type="text" name="phonenumber" required
                                   value={ this.state.order.phonenumber }
                                   onChange={ (e) => this.handleFieldChange('phonenumber', e) }
                            />
                        </label>
                    </div>

                    <div className="col-12 col-xl-6 custom-pad__r d-flex flex-wrap">
                        <label>
                            MESSAGE *
                            <textarea name="comments" id="comments" required
                                      value={ this.state.order.comments }
                                      onChange={ (e) => this.handleFieldChange('comments', e) }></textarea>
                        </label>
                        <div
                            className="d-flex align-items-start w-100 flex-wrap flex-lg-nowrap flex-lg-nowrap">
                            <label className="file-label d-flex align-items-center">
                                <Files
                                    className="attach-file"
                                    onError={ this.handleFileError }
                                    onChange={ this.handleFileChange }
                                    accepts={ ['.zip'] }
                                    multiple={ false }
                                    maxFileSize={ 30000000 }
                                    clickable
                                />
                                <img src={ attachIcon } alt="attach-file-icon"/>
                                <span className="d-block">
                                    { this.state.order.file && <span>{ this.state.order.file.name }</span> }

                                    { !this.state.order.file &&
                                    <span>Attach your design <small>(only 1 zip file allowed!)</small></span> }
                                </span>
                            </label>
                            <button type="submit" className="btn align-self-center" data-toggle="modal"
                                    data-target="#successModal">
                                { this.state.isSubmitInProgress ? 'Submitting...' : 'SEND MESSAGE' }
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <OrderSuccessModal isOpen={ this.state.isSuccessModalOpen } toggle={ this.toggleSuccessModal }/>
        </section>);
    }
}
