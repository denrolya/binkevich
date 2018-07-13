import React from 'react';
import ImageCarousel from '../ImageCarousel';

export default class WhiteCarouselSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [{
                src: require('../../../img/carousel-white-img.jpg')
            }, {
                src: require('../../../img/carousel-white-img2.jpg')
            }]
        };
    }

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
                            <a href="/categories" className="btn btn-transparent">EXPLORE</a>
                        </div>
                        <div className="col-xl-7 col-sm-12">
                            <ImageCarousel id="white-carousel" items={ this.state.images } indicators={true}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



