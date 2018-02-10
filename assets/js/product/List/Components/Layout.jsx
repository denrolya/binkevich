import React, {Component} from 'react';
import {Button} from 'reactstrap';
import ProductList from './ProductList';

export default class Layout extends Component {

    render() {
        return (
            <div>
                <ProductList/>
            </div>
        );
    }
}