import React from 'react';

const logo = require('../../../../img/footer-logo.png');

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex aling-item-center">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <img src={logo} alt="" className="marg-r-auto"/>
                            <p>Binkevich Jewellery London</p>
                            <a href="https://www.facebook.com/BINKEVICHJEWELLERY" className="fb-icon icon marg-l-auto"></a>
                            <a href="https://www.instagram.com/binkevichjewellery" className="inst-icon icon marg-l-15"></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}