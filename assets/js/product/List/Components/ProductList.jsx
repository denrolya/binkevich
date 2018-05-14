import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        const categories = ['Rings', 'Earrings', 'Bangles', 'Pendants'],
            categoryExtractedFromUrl = this.extractCategoryFromURI(),
            activeCategory = (categories.indexOf(categoryExtractedFromUrl) !== -1) ?
                              categoryExtractedFromUrl :
                             'Rings';
        this.state = {
            categories: categories,
            activeCategory: activeCategory,
            products:  []
        };
    }

    extractCategoryFromURI() {
        const currentPath = new URL(window.location.href).pathname;
        const categorySlug = currentPath.substr(currentPath.lastIndexOf('/') + 1);

        return this.capitalize(categorySlug);
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    switchCategory(category) {
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
              this.setState(prevState => ({
                  ...prevState,
                  products: json.data
              }));
          });
    }

    componentDidMount() {
        this.switchCategory(this.state.activeCategory);
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
                                            className={category === this.state.activeCategory ? 'active' : ''}
                                            key={i}
                                            type="button"
                                            onClick={() => this.switchCategory(category)}>
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