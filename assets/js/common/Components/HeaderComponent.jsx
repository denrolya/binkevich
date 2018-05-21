import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={'container d-flex ' + ((this.props.dark === true) ? 'bg-transparent position-absolute' : 'bg-white')}>
                <div className="mobile-menu">
                    <div className="wrap-els">
                        <div className="d-flex">
                            <a className="logo marg-auto" href="/"></a>
                            <button type="button" className="close-mobile-menu">&#10006;</button>
                        </div>

                        <ul>
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="" className="have-sub-mobile-menu">JEWELLERY</a>
                                <ul>
                                    <li className="have-sub-mobile-menu">
                                        <a href="/categories" className="have-sub-mobile-menu">CATEGORIES</a>
                                        <ul>
                                            <li>
                                                <a href="/categories/ring">RINGS</a>
                                            </li>
                                            <li>
                                                <a href="/categories/earring">EARRINGS</a>
                                            </li>
                                            <li>
                                                <a href="/categories/bangle">BANGLES</a>
                                            </li>
                                            <li>
                                                <a href="/categories/pendant">PENDANTS</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/collections" className="have-sub-mobile-menu">COLLECTIONS</a>
                                        <ul>
                                            {this.props.collections && this.props.collections.map((collection, i) => {
                                                return (
                                                    <li>
                                                        <a href={'/collections/' + collection.slug}>{collection.name}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/lookbook">LOOKBOOK</a>
                            </li>
                            <li>
                                <a href="/bespoke">BESPOKE</a>
                            </li>
                            <li>
                                <a href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>

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
                                    {this.props.collections && this.props.collections.map((collection, i) => {
                                        return (
                                            <li className="item third new">
                                                <a href={'/collections/' + collection.slug}>{collection.name} <span>NEW</span></a>
                                            </li>
                                        );
                                    })}
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