import React, {Component} from 'react';

export default class HomeWhiteCarousel extends Component {
    render() {

        return (
            <section className="home-white-carousel bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-sm-12">
                            <h3>COLLECTION LOOKBOOK</h3>
                            <p>
                                At Binkevich Jewellery we pride ourselves on our
                                bespoke service providing unique masterpieces
                                for any occasion. Please contact us with your design
                                requirements and we’ll be more than happy to assist.
                            </p>
                            <a href="#" className="btn btn-transparent">EXPLORE</a>
                        </div>
                        <div className="col-xl-7 col-sm-12">

                            <div id="white-carousel" className="carousel slide" data-ride="carousel">

                                <ul className="carousel-indicators">
                                    <li data-target="#white-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#white-carousel" data-slide-to="1"></li>
                                    <li data-target="#white-carousel" data-slide-to="2"></li>
                                </ul>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="img/carousel-white-img.jpg" alt="Los Angeles"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/carousel-white-img.jpg" alt="Chicago"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/carousel-white-img.jpg" alt="New York"/>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#white-carousel" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#white-carousel" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



