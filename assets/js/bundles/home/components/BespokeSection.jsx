import React from 'react';
import ImageCarousel from '../../product/components/ImageCarousel';

export default class BespokeSection extends React.Component {
    render() {
        return (
            <section className="home-black-carousel" id="section-bespoke">
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
                                    { this.props.carouselImages && this.props.carouselImages.length > 0 &&
                                      <ImageCarousel items={ this.props.carouselImages } indicators={true}/>
                                    }
                                </div>
                                <div className="wrap-info">
                                    <h3>Personal order</h3>
                                    <p>
                                        At Binkevich Jewellery we pride ourselves on our
                                        bespoke service providing unique masterpieces
                                        for any occasion. Please contact us with your design
                                        requirements and we’ll be more than happy to assist.
                                    </p>
                                    <a href={Routing.generate('contact_form')} className="btn">GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


