import React from 'react';
import HeaderMobile from './HeaderMobile';
import {fetchCollectionsAndCategories} from '../Actions/HeaderActions';
import {fetchCollections} from '../Actions/CollectionActions';
import {fetchCategories} from '../Actions/CategoryActions';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: [],
            categories: []
        };
    }

    componentDidMount() {
        fetchCategories()
            .then(res => {
                this.setState({
                    categories: res.data.categories
                })
            });

        fetchCollections()
            .then(res => {
                this.setState({
                    collections: res.data.collections,
                });
            });
    }

    render() {
        const collections = this.state.collections.map((collection, i) => {
            return (
                <li className="item third new" key={i}>
                    <a href={Routing.generate('collection_product_list', {slug: collection.slug})}>{collection.name} <span>NEW</span></a>
                </li>
            );
        });
        const categories = this.state.categories.map((category, i) => {
            return (
                <li className="item third" key={i}>
                    <a className="text-uppercase" href={Routing.generate('category_product_list', {slug: category.slug})}>{category.name}</a>
                </li>
            );
        });

        return (
            <header className={((this.props.dark === true) ? 'bg-transparent position-absolute' : 'bg-white')}>
                <div className="container d-flex">
                    <HeaderMobile categories={this.state.categories} collections={this.state.collections}></HeaderMobile>

                    <button type="button" className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <a className="logo" href={Routing.generate('homepage')}></a>

                    <ul className="menu-list marg-l-auto pad-t-30">
                        <li className="item first">
                            <a href={Routing.generate('homepage')}>Home</a>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href={Routing.generate('category_list')}>Jewellery</a>
                            <ul className="second-menu sub-menu">
                                <li className="item second have-sub-sub-menu">
                                    <a href={Routing.generate('category_list')}>CATEGORIES</a>
                                    <ul className="third-menu sub-menu">{ categories }</ul>
                                </li>
                                <li className="item second have-sub-sub-menu">
                                    <a href="#">Collections</a>
                                    <ul className="third-menu sub-menu">{ collections }</ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href={Routing.generate('homepage') + '#section-lookbook'}>Lookbook</a>
                        </li>
                        <li className="item first">
                            <a href={Routing.generate('homepage') + '#section-bespoke'}>Bespoke</a>
                        </li>
                        <li className="item first">
                            <a href={Routing.generate('contact_form')}>Contact</a>
                        </li>
                        <li className="first lock-icon">
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}