import React from 'react';
import HeaderMobile from './HeaderMobile';
import {fetchCollections} from '../Actions/HeaderActions';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        };
    }

    componentDidMount() {
        fetchCollections()
            .then(res => {
                this.setState({
                    collections: res.data
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
        });

        return (
            <header className={'container d-flex ' + ((this.props.dark === true) ? 'bg-transparent position-absolute' : 'bg-white')}>
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
                                        <a href="/categories/ring">RINGS</a>
                                    </li>
                                    <li className="item third">
                                        <a href="/categories/earring">Earrings</a>
                                    </li>
                                    <li className="item third">
                                        <a href="/categories/bangle">Bangles</a>
                                    </li>
                                    <li className="item third">
                                        <a href="/categories/pendant">PENDANTS</a>
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
            </header>
        );
    }
}