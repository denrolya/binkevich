import React, {Component} from 'react';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xl-3 col-lg-6 col-12 product earrings">
                <img src={this.props.product.productImages[0].src} alt="" />
                    <h5>{ this.props.product.name }</h5>
                    { this.props.product.collection &&
                        <h6>{ this.props.product.collection.name }</h6>
                    }
                    <p>Various color schemes available</p>
                    <a href={ '/product/' + this.props.product.id } className="btn-buy">PURCHASE</a>
            </div>
        );
    }
}