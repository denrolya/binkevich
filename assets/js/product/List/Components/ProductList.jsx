import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: ['Rings', 'Earrings', 'Bangles', 'Pendants'],
            activeCategory: 'Rings',
            products:  []
        };
    }

    loadProducts(category) {
        this.setState(prevState => ({
            ...prevState,
            activeCategory: category,
            products:   []
        }));

        fetch('/app_dev.php/api/v1/categories/' + category.toLowerCase(), {
            method: 'GET',
            mode:   'CORS'
        }).then(res => res.json())
          .then(json => {
              this.setState({
                  products: json.data
              });
          });
    }

    componentDidMount() {
        this.loadProducts(this.state.activeCategory);
    }

    render() {
        return (
            <section className="product-cat filtered-products">
                <div className="container">
                    <div className="row">
                        <div className="col-12 tabs justify-content-center">
                            {this.state.categories && this.state.categories.map((category, i) => {
                                return (
                                    <button id={category.toLowerCase()}
                                            key={i}
                                            type="button"
                                            onClick={() => this.loadProducts(category)}>
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="row">
                        {this.state.products && this.state.products.map((product, i) => {
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