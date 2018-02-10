import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button
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
                    <ImageCarousel items={this.props.product.productImages}/>
                    <CardBody>
                        <CardTitle>{ this.props.product.name }</CardTitle>
                        <Button color="danger">Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}