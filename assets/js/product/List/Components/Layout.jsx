import React, {Component} from 'react';
import HeaderWhite from '../../../common/Components/HeaderWhite';
import Footer from '../../../common/Components/Footer';
import ProductList from './ProductList';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <HeaderWhite/>
                <ProductList/>
                <Footer/>
            </div>
        );
    }
}