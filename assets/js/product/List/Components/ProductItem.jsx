import React, {Component} from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';
import ImageCarousel from '../../../common/Components/ImageCarousel';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    { this.props.product.productImages && this.props.product.productImages.length >0 &&
                        <ImageCarousel items={ this.props.product.productImages } indicators={true}/>
                    }
                    <CardBody>
                        <CardTitle>{ this.props.product.name }</CardTitle>
                        <a href={ '/product/' + this.props.product.id } className="btn btn-default">Purchase</a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}