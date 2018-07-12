import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductItem from '../Components/ProductItem';
import { fetchProductsInCategory, extractCategoryFromURI } from '../Actions/ProductActions';

export default class ProductListPage extends React.Component {
    constructor(props) {
        super(props);

        const categories = ['Rings', 'Earrings', 'Bangles', 'Pendants'],
              categoryExtractedFromUrl = extractCategoryFromURI(),
              activeCategory = (categories.indexOf(categoryExtractedFromUrl) !== -1) ?
                               categoryExtractedFromUrl :
                               'Rings';

        this.state = {
            categories: categories,
            activeCategory: activeCategory,
            products: []
        };
    }

    switchCategory(category) {
        this.setState({
            products: [],
            activeCategory: category
        });

        fetchProductsInCategory(category.toLowerCase())
            .then(res => {
                this.setState({
                    products: res.data
                });
            });
    }

    componentDidMount() {
        this.switchCategory(this.state.activeCategory);
    }

    render() {
        const categoriesButtons = this.state.categories.map((category, i) => {
            return (
                <a id={category.toLowerCase()}
                        className={category === this.state.activeCategory ? 'active' : ''}
                        key={i}
                        onClick={this.switchCategory.bind(this, category)}>
                    {category}
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