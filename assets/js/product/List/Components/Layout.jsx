import React, {Component} from 'react';
import Header from '../../../common/Components/Header';
import ProductList from './ProductList';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <ProductList/>
                </div>
            </div>
        );
    }
}