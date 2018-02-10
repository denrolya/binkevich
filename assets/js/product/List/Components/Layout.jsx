import React, {Component} from 'react';
import HeaderLight from '../../../common/Components/HeaderLight';
import ProductList from './ProductList';

export default class Layout extends Component {

    render() {
        return (
            <div>
                <HeaderLight/>
                <div className="container">
                    <ProductList/>
                </div>
            </div>
        );
    }
}