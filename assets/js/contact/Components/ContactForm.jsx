import React, {Component} from 'react';

const attach = require('../../../img/attach-file-icon.png');

export default class ContactForm
    extends Component {

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
                        <form className="row" method="post">
                            <div className="col-12 col-xl-6 custom-pad__l d-flex flex-wrap">
                                <label>
                                    NAME
                                    <input type="text" name="name"/>
                                </label>
                                <label>
                                    EMAIL
                                    <input type="text" name="email"/>
                                </label>
                                <label>
                                    PHONE NUMBER
                                    <input type="text" name="phone"/>
                                </label>
                            </div>
                            <div className="col-12 col-xl-6 custom-pad__r d-flex flex-wrap">
                                <label>
                                    MESSAGE
                                    <textarea name="message" id=""></textarea>
                                </label>
                                <div
                                    className="d-flex align-items-start w-100 flex-wrap flex-lg-nowrap flex-lg-nowrap">
                                    <label className="file-label d-flex align-items-center">
                                        <input type="file" name="attach-file" id="attach-file-contact-form"
                                               multiple="multiple"/>
                                        <img src={attach} alt="attach-file-icon"/>
                                        <span className="d-block">
                            <span>Attach your design</span>
                            <span id="files-length"><b>0</b> files attached</span>
                        </span>
                                    </label>
                                    <button type="button" className="btn align-self-center" data-toggle="modal"
                                            data-target="#successModal">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

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


                <script type="text/javascript" src="js/main.js"></script>
            </div>
        );
    }
}