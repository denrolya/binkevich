import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductSection from '../Components/ProductSection';
import {fetchProductById, extractProductIdFromURI} from '../Actions/ProductActions';

export default class ProductViewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: undefined
        };
    }

    componentDidMount() {
        const productID = extractProductIdFromURI();

        fetchProductById(productID)
            .then(res => {
                this.setState({
                    product: res.data
                });
            });
    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.product &&
                    <ProductSection product={this.state.product}/>
                }
                <Footer/>
            </div>
        )
    }
}