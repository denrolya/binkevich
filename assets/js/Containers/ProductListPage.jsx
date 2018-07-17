import React from 'react';
import _ from 'lodash';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductItem from '../Components/ProductItem';
import { fetchCategories } from '../Actions/CategoryActions';
import { fetchProductsInCategory, extractCategoryFromURI } from '../Actions/ProductActions';

export default class ProductListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            activeCategory: undefined,
            products: []
        };
    }

    switchCategory(category) {
        this.setState({
            products: [],
            activeCategory: category
        });

        fetchProductsInCategory(category.slug)
            .then(res => {
                this.setState({
                    products: res.data
                });
            });
    }

    componentDidMount() {
        fetchCategories()
            .then(res => {
                const categoryExtractedFromUrl = extractCategoryFromURI(),
                    activeCategory = _.find(res.data.categories, {'slug': categoryExtractedFromUrl});

                this.setState({
                    categories: res.data.categories,
                    activeCategory: activeCategory ? activeCategory : res.data.categories[0]
                });

                this.switchCategory(this.state.activeCategory);
            });
    }

    render() {
        const categoriesButtons = this.state.categories.map((category, i) => {
            return (
                <a id={category.slug}
                        href="#"
                        className={'text-capitalize ' + ((category === this.state.activeCategory) ? 'active' : '')}
                        key={i}
                        onClick={this.switchCategory.bind(this, category)}>
                    {category.name}
                </a>
            );
        });

        const products = this.state.products.map((product, i) => {
            return (
                <ProductItem product={product} key={i}/>
            );
        });

        return (
            <div>
                <Header/>
                <section className="product-cat filtered-products">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 tabs justify-content-center">{ categoriesButtons }</div>
                        </div>
                        <div className="row">{ products }</div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}