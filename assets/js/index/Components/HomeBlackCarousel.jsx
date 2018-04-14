import React, {Component} from 'react';

const logo = require('../../../img/carousel-black-img.jpg');

export default class HomeBlackCarousel extends Component {
    render() {

        return (
            <section className="home-black-carousel ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>BESPOKE SERVICES</h2>
                            <p>
                                With emphasis on bespoke bridal collections, we are proud to help
                                you make your perfect design even more personal and unique.
                            </p>
                            <div className="wrap-block d-flex">
                                <div id="black-carousel" className="carousel slide" data-ride="carousel">

                                    <ul className="carousel-indicators">
                                        <li data-target="#black-carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#black-carousel" data-slide-to="1"></li>
                                        <li data-target="#black-carousel" data-slide-to="2"></li>
                                    </ul>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={logo} alt="Los Angeles"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={logo} alt="Chicago"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={logo} alt="New York"/>
                                        </div>
                                    </div>

                                    <a className="carousel-control-prev" href="#black-carousel" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#black-carousel" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div className="wrap-info">
                                    <h3>Personal order</h3>
                                    <p>
                                        At Binkevich Jewellery we pride ourselves on our
                                        bespoke service providing unique masterpieces
                                        for any occasion. Please contact us with your design
                                        requirements and we’ll be more than happy to assist.
                                    </p>
                                    <a href="#" className="btn">GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


