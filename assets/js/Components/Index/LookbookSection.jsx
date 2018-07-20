import React from 'react';
import ImageCarousel from '../ImageCarousel';

export default class LookbookSection extends React.Component {
    render() {
        return (
            <section className="home-white-carousel bg-white" id="section-lookbook">
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
                            <a href={Routing.generate('category_list')} className="btn btn-transparent">EXPLORE</a>
                        </div>
                        <div className="col-xl-7 col-sm-12">
                            <ImageCarousel id="white-carousel" items={ this.props.carouselImages } indicators={true}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



