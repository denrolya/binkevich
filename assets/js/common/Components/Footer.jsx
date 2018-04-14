import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <footer className="d-flex aling-item-center">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <img src="img/footer-logo.png" alt="" className="marg-r-auto"/>
                            <p>Binkevich Jewellery London</p>
                            <a href="#" className="fb-icon icon marg-l-auto"></a>
                            <a href="#" className="inst-icon icon marg-l-15"></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}