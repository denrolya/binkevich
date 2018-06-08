import React from 'react';
import ProductItem from '../Components/ProductItem';

export default class CollectionProductsSection extends React.Component {
    render() {
        return (
            <section className="product-cat">
                <div className="container">
                    <div className="row">
                        <div className="col-12  justify-content-center d-flex">
                            <h2 className="collection-title">{this.props.collection.name}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.collection.products.length > 0 && this.props.collection.products.map((product, i) => {
                            return (
                                <ProductItem product={product} key={i}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}