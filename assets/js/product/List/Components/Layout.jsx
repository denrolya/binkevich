import React, {Component} from 'react';
import Header from '../../../common/Containers/HeaderContainer';
import Footer from '../../../common/Components/Footer';
import ProductList from '../Containers/ProductListContainer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProductList/>
                <Footer/>
            </div>
        );
    }
}