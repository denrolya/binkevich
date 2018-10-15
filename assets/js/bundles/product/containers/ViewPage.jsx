import React from 'react';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import ProductSection from '../components/ProductSection';
import { extractProductIdFromURI, fetchProductById } from '../actions/ProductActions';

export default class ViewPage extends React.Component {
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