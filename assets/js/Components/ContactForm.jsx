import React from 'react';
import {ToastContainer} from "react-toastr";
import Files from 'react-files'
//import {ToastContainer, toast} from 'react-toastify';
import OrderSuccessModal from './OrderSuccessModal';

const attachIcon = require('../../img/attach-file-icon.png');
const initialState = {
    order: {
        name: '',
        email: '',
        phonenumber: '',
        comments: 'Dear Binkevich Team,',
        file: undefined
    },
    isSubmitInProgress: false,
    isSuccessModalOpen: false
};

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(propertyName, event) {
        const order = this.state.order;
        order[propertyName] = event.target.value;
        this.setState({order});
    }

    handleChangeFile(files) {
        if (files !== undefined) {
            const order = this.state.order;
            order.file = files[0];
            this.setState({order});
        }
    }

    onFileError() {
        window.alert("jojo")
        container.success('hi! Now is ${new Date()}', '///title\\\\\\', {
            closeButton: true,
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            this.setState({
                isSubmitInProgress: true
            });
            const order = this.state.order;

            this.props
                .onSubmit(this.state.order)
                .then(res => {
                    this.setState(initialState);
                    this.toggleSuccessModal();
                });
        }
    }

    isFormValid() {
        // TODO: implement
        //maxFiles = {3}
        //maxFileSize = {30000000}d
        //  //minFileSize = {0}
        return true;
    }

//<input type="file"
//name="attach-file"
//id="attach-file-contact-form"
//multiple="false"
//accept=".zip"
//maxFileSize={30000000}
//onChange={this.handleChange.bind(this, 'file')}
///>
    toggleSuccessModal() {
        this.setState({
            isSuccessModalOpen: !this.state.isSuccessModalOpen
        });
    }

    render() {
        var container;
        return (
            <section className="contact-form">
                <div className="container bg-white">
                    <div className="row">
                        <div className="col-12 custom-pad">
                            <ToastContainer
                                ref={ref => container = ref}
                                className="toast-top-right"
                            />
                            <h1>
                                React-Toastr
                                <small>React.js toastr component</small>
                            </h1>
                            <h2>CONTACT</h2>
                            <p>
                                If you’re interested in our collections or require our bespoke services
                                bringing your ideas to life, please do not hesitate to message
                                us and we will get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                    <form className="row" method="post" onSubmit={this.handleSubmit}>
                        <div className="col-12 col-xl-6 custom-pad__l d-flex flex-wrap">
                            <label>
                                NAME
                                <input
                                    type="text" name="name"
                                    value={this.state.order.name}
                                    onChange={this.handleChange.bind(this, 'name')}
                                />
                            </label>
                            <label>
                                EMAIL
                                <input type="email" name="email"
                                       value={this.state.order.email}
                                       onChange={this.handleChange.bind(this, 'email')}
                                />
                            </label>
                            <label>
                                PHONE NUMBER
                                <input type="text" name="phonenumber"
                                       value={this.state.order.phonenumber}
                                       onChange={this.handleChange.bind(this, 'phonenumber')}
                                />
                            </label>
                        </div>

                        <div className="col-12 col-xl-6 custom-pad__r d-flex flex-wrap">
                            <label>
                                MESSAGE
                                <textarea name="comments"
                                          id="comments"
                                          value={this.state.order.comments}
                                          onChange={this.handleChange.bind(this, 'comments')}
                                ></textarea>
                            </label>
                            <div
                                className="d-flex align-items-start w-100 flex-wrap flex-lg-nowrap flex-lg-nowrap">
                                <label className="file-label d-flex align-items-center">
                                    <Files
                                        className="attach-file"
                                        onError={
                                            () => {
                                                console.log(container)
                                                container.success('hi!', '///title\\\\\\', {
                                                    closeButton: true,
                                                })
                                            }

                                        }
                                        onChange={this.handleChangeFile()}
                                        accepts={['.zip']}
                                        multiple={false}
                                        maxFileSize={30000000}
                                        clickable
                                    />
                                    <img src={attachIcon} alt="attach-file-icon"/>
                                    <span className="d-block">
                                          <span>Attach your design
                                              <small>(only 1 zip file allowed!)</small>
                                          </span>
                                    </span>
                                </label>
                                <button type="submit" className="btn align-self-center" data-toggle="modal"
                                        data-target="#successModal">
                                    {this.state.isSubmitInProgress ? 'Submitting...' : 'SEND MESSAGE'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <OrderSuccessModal isOpen={this.state.isSuccessModalOpen} toggle={this.toggleSuccessModal.bind(this)}/>
            </section>
        )
            ;
    }
}

// container.success('hi!', '///title\\\\\\', {
// closeButton: true,
// })
