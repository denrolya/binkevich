import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductView from '../Components/ProductView';

export default class ProductViewPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}