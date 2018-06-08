import React from 'react';
import ImageCarousel from '../Components/ImageCarousel';

export default class ProductSection extends React.Component {
    render() {
        return (
            <section className="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-sm-12 order-xl-1  order-2 d-flex align-items-center">
                            <div className="w-100">
                                <h2><span>{this.props.product.name}</span></h2>

                                <h6><span>{this.props.product.shortDescription}</span></h6>
                                <p>
                                    {this.props.product.description}
                                </p>
                                <div className="wrap-prise">
                                    <h3 className="prise">£120</h3>
                                    <button type="button" className="btn btn-transparent" data-toggle="modal"
                                            data-target="#purchase-modal">PURCHASE
                                    </button>
                                </div>
                            </div>
                        </div>

                        {this.props.product.productImages.length > 0 &&
                            <div className="col-xl-7 col-sm-12 order-xl-2 order-1">
                                <div id="product-img-carousel" className="carousel slide" data-ride="carousel">
                                    <ImageCarousel id="white-carousel" items={this.props.product.productImages} indicators={true}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}