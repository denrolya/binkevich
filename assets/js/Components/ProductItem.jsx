import React from 'react';

export default class ProductItem extends React.Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-6 col-12 product earrings">
                <div className="wrap-img">
                    <img src={this.props.product.productImages[0].src} alt=""/>
                </div>
                <h5>{this.props.product.name}</h5>
                {this.props.product.collection &&
                <h6>{this.props.product.collection.name}</h6>
                }
                <p>Various color schemes available</p>
                <a href={Routing.generate('product_view', {id: this.props.product.id})} className="btn-buy text-uppercase">View</a>
            </div>
        );
    }
}