import React, {Component} from 'react';
import ProductItem from './ProductItem';

export default class ProductListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {this.props.products && this.props.products.map((product, i) => {
                    return (
                        <ProductItem product={product} key={i}/>
                    );
                })}
            </div>
        );
    }
}