import React from 'react';
import ImageCarousel from '../ImageCarousel';

export default class BlackCarouselSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [{
                src: require('../../../img/carousel-black-img.jpg')
            }, {
                src: require('../../../img/carousel-black-img2.jpg')
            }]
        };
    }

    render() {
        return (
            <section className="home-black-carousel ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>BESPOKE SERVICES</h2>
                            <p>
                                With emphasis on bespoke bridal collections, we are proud to help
                                you make your perfect design even more personal and unique.
                            </p>
                            <div className="wrap-block d-flex">
                                <div id="black-carousel">
                                    <ImageCarousel items={ this.state.images } indicators={true}/>
                                </div>
                                <div className="wrap-info">
                                    <h3>Personal order</h3>
                                    <p>
                                        At Binkevich Jewellery we pride ourselves on our
                                        bespoke service providing unique masterpieces
                                        for any occasion. Please contact us with your design
                                        requirements and we’ll be more than happy to assist.
                                    </p>
                                    <a href="/contact" className="btn">GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


