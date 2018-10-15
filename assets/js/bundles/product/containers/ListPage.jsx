import React from 'react';
import _ from 'lodash';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import ProductItem from '../components/ProductItem';
import { fetchCategories } from '../actions/CategoryActions';
import { extractCategoryFromURI, fetchProductsInCategory } from '../actions/ProductActions';

export default class ListPage extends React.Component {
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
                    activeCategory = _.find(res.data.categories, { 'slug': categoryExtractedFromUrl });

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