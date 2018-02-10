import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';

export default class ProductItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={ this.props.product.productImages[0].path } alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{ this.props.product.name }</CardTitle>
                    <Button color="danger">Button</Button>
                </CardBody>
            </Card>
        );
    }
}