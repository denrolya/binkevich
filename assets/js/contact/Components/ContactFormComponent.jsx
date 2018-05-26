import React, {Component} from 'react';

const attach = require('../../../img/attach-file-icon.png');

export default class ContactFormComponen extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                order: {
                    name: '',
                    email: '',
                    phonenumber: '',
                    comments: 'Dear Binkevich Team'
                }
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(propertyName, event) {
        const order = this.state.order;

        order[propertyName] = event.target.value;
        this.setState({order: order});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state)
    }


// TODO attachment
    render() {
        return (
            <div>
                <section className="contact-form">
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
                                        <input type="file"
                                               name="attach-file"
                                               id="attach-file-contact-form"
                                               multiple="multiple"
                                        />
                                        <img src={attach} alt="attach-file-icon"/>
                                        <span className="d-block">
                                                  <span>Attach your design</span>
                                                  <span id="files-length"><b>0</b> files attached</span>
                                                  </span>
                                    </label>
                                    <button type="submit" className="btn align-self-center" data-toggle="modal"
                                            data-target="#successModal">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <div className="modal fade" id="successModal" tabIndex="-1" role="dialog"
                     aria-labelledby="successModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h2 id="successModalLabel">
                                Your message
                                has been sent
                            </h2>
                            <div className="modal-body">
                                <p>We’ll be in touch as soon as possible.</p>
                            </div>
                            <button type="button" className="btn">back home</button>
                        </div>
                    </div>
                </div>


                <script type="text/javascript" src="js/main.js"></script>
            </div>
        );
    }
}


//export default ContactFormComponent
