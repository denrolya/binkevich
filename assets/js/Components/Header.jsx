import React from 'react';
import HeaderMobile from './HeaderMobile';
import {fetchCollectionsAndCategories} from '../Actions/HeaderActions';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        };
    }

    componentDidMount() {
        fetchCollectionsAndCategories()
            .then(res => {
                this.setState({
                    collections: res.data.collections,
                    categories: res.data.categories
                });
            });
    }

    render() {
        const collections = this.state.collections.map((collection, i) => {
            return (
                <li className="item third new" key={i}>
                    <a href={'/collections/' + collection.slug}>{collection.name} <span>NEW</span></a>
                </li>
            );
        }),
              categories = this.state.collections.map((category, i) => {
                 return (
                     <li className="item third">
                         <a href={'/categories/' + category.slug}>{category.name}</a>
                     </li>
                 )
              });

        return (
            <header className={((this.props.dark === true) ? 'bg-transparent position-absolute' : 'bg-white')}>
                <div className="container d-flex">
                    <HeaderMobile collections={this.state.collections}></HeaderMobile>

                    <button type="button" className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <a className="logo" href="/"></a>

                    <ul className="menu-list marg-l-auto pad-t-30">
                        <li className="item first">
                            <a href="/">Home</a>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href="#">Jewellery</a>
                            <ul className="second-menu sub-menu">
                                <li className="item second have-sub-sub-menu">
                                    <a href="/categories">CATEGORIES</a>
                                    <ul className="third-menu sub-menu">

                                        <li className="item third">
                                            <a href="/categories/earrings">Earrings</a>
                                        </li>
                                        <li className="item third">
                                            <a href="/categories/bangles">Bangles</a>
                                        </li>
                                        <li className="item third">
                                            <a href="/categories/pendants">PENDANTS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item second have-sub-sub-menu">
                                    <a href="/collections">Collections</a>
                                    <ul className="third-menu sub-menu">
                                        { collections }
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href="/lookbook">Lookbook</a>
                        </li>
                        <li className="item first">
                            <a href="/bespoke">Bespoke</a>
                        </li>
                        <li className="item first">
                            <a href="/contact">Contact</a>
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