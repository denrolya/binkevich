import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProductSection from '../../Components/ProductSection';
import { extractProductIdFromURI, fetchProductById } from '../../Actions/ProductActions';

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

ReactDOM.render(<ProductViewPage />, document.getElementById('content'));